# Настройка HTTPS и SSL сертификатов

## 📋 Варианты по способу хостинга

### ✅ Вариант 1: Облачные платформы (РЕКОМЕНДУЕТСЯ)

**Платформы:** Vercel, Netlify, Cloudflare Pages, GitHub Pages

**SSL сертификат:** ✅ **Автоматически** (бесплатно)

**Что делать:** **НИЧЕГО!** 🎉

После деплоя:
1. Подключите свой домен в настройках платформы
2. SSL сертификат выдастся автоматически (1-5 минут)
3. HTTPS будет работать сразу
4. Автоматическое продление сертификата

**Преимущества:**
- Нулевая настройка
- Автоматическое управление
- CDN из коробки
- HTTP → HTTPS редирект автоматически

---

### ⚙️ Вариант 2: VPS с Docker (требует настройки)

**Платформы:** DigitalOcean, Hetzner, AWS EC2, любой VPS

**SSL сертификат:** Let's Encrypt через Certbot

---

## 🐳 Docker + Let's Encrypt: Полная настройка

### Архитектура

```
Internet → Nginx Proxy (с Certbot) → Docker Container (Nuxt Landing)
           [HTTPS + SSL]              [HTTP:80]
```

---

### Способ 1: Docker Compose с Nginx Proxy и Certbot

**Самый простой и надёжный способ**

#### Шаг 1: Обновить структуру проекта

Создайте файл `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  # Nuxt Landing Page
  landing:
    build: .
    container_name: socinyashka-landing
    restart: unless-stopped
    networks:
      - web
    expose:
      - "80"

  # Nginx Proxy с автоматическим SSL
  nginx-proxy:
    image: nginxproxy/nginx-proxy:latest
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - nginx-certs:/etc/nginx/certs:ro
      - nginx-vhost:/etc/nginx/vhost.d
      - nginx-html:/usr/share/nginx/html
    networks:
      - web
    environment:
      - DEFAULT_HOST=socinyashka.ru

  # Certbot для автоматического получения SSL
  certbot:
    image: nginxproxy/acme-companion:latest
    container_name: nginx-proxy-acme
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - nginx-certs:/etc/nginx/certs:rw
      - nginx-vhost:/etc/nginx/vhost.d
      - nginx-html:/usr/share/nginx/html
      - acme-state:/etc/acme.sh
    networks:
      - web
    environment:
      - DEFAULT_EMAIL=suburg@gmail.com
    depends_on:
      - nginx-proxy

networks:
  web:
    external: true

volumes:
  nginx-certs:
  nginx-vhost:
  nginx-html:
  acme-state:
```

#### Шаг 2: Обновить Dockerfile для landing

Добавьте environment variables в Dockerfile:

```dockerfile
# Production stage
FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Для nginx-proxy (SSL автоконфигурация)
ENV VIRTUAL_HOST=socinyashka.ru
ENV LETSENCRYPT_HOST=socinyashka.ru
ENV LETSENCRYPT_EMAIL=suburg@gmail.com

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Шаг 3: Подготовка сервера

```bash
# 1. Создать Docker network
docker network create web

# 2. Убедиться, что домен указывает на ваш сервер (DNS A-запись)
# socinyashka.ru → IP_вашего_сервера

# 3. Запустить весь стек
docker-compose -f docker-compose.prod.yml up -d
```

#### Шаг 4: Проверка

```bash
# Проверить статус контейнеров
docker-compose -f docker-compose.prod.yml ps

# Посмотреть логи Certbot (получение сертификата)
docker logs nginx-proxy-acme -f

# Проверить сайт
curl -I https://socinyashka.ru
```

**Результат:**
- ✅ Автоматическое получение SSL сертификата (1-2 минуты)
- ✅ Автоматический редирект HTTP → HTTPS
- ✅ Автоматическое продление сертификата (каждые 60 дней)
- ✅ A+ рейтинг SSL Labs

---

### Способ 2: Certbot на хосте (без proxy)

**Если хотите управлять Nginx напрямую на хосте**

#### Шаг 1: Установить Certbot на сервер

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx
```

#### Шаг 2: Получить SSL сертификат

```bash
# Остановить Docker контейнер (порт 80 должен быть свободен)
docker stop socinyashka-landing

# Получить сертификат
sudo certbot certonly --standalone -d socinyashka.ru -d www.socinyashka.ru

# Сертификаты будут в:
# /etc/letsencrypt/live/socinyashka.ru/fullchain.pem
# /etc/letsencrypt/live/socinyashka.ru/privkey.pem
```

#### Шаг 3: Обновить nginx.conf для HTTPS

Создайте `nginx-ssl.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Gzip сжатие
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # HTTP → HTTPS редирект
    server {
        listen 80;
        server_name socinyashka.ru www.socinyashka.ru;
        return 301 https://$server_name$request_uri;
    }

    # HTTPS сервер
    server {
        listen 443 ssl http2;
        server_name socinyashka.ru www.socinyashka.ru;
        
        root /usr/share/nginx/html;
        index index.html;

        # SSL сертификаты
        ssl_certificate /etc/letsencrypt/live/socinyashka.ru/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/socinyashka.ru/privkey.pem;

        # SSL настройки (Mozilla Modern)
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
        ssl_prefer_server_ciphers off;

        # Security headers
        add_header Strict-Transport-Security "max-age=63072000" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;

        # SPA fallback
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Кэширование статики
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|webp)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

#### Шаг 4: Монтировать сертификаты в Docker

Обновите `docker-compose.yml`:

```yaml
version: '3.8'
services:
  landing:
    build: .
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - ./nginx-ssl.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped
```

#### Шаг 5: Запустить

```bash
# Пересобрать и запустить
docker-compose up -d --build

# Проверить
curl -I https://socinyashka.ru
```

#### Шаг 6: Автоматическое продление

```bash
# Добавить в crontab
sudo crontab -e

# Добавить строку (проверка и обновление каждую неделю)
0 3 * * 1 certbot renew --quiet && docker-compose restart landing
```

---

## 🔍 Проверка SSL

### Онлайн-инструменты:

1. **SSL Labs Test:**  
   https://www.ssllabs.com/ssltest/  
   Цель: **A или A+** рейтинг

2. **Security Headers:**  
   https://securityheaders.com/  
   Проверка security headers

3. **Why No Padlock:**  
   https://www.whynopadlock.com/  
   Поиск mixed content (HTTP на HTTPS странице)

### Ручная проверка:

```bash
# Проверить SSL сертификат
openssl s_client -connect socinyashka.ru:443 -servername socinyashka.ru

# Проверить редирект HTTP → HTTPS
curl -I http://socinyashka.ru

# Должен вернуть: HTTP/1.1 301 Moved Permanently
# Location: https://socinyashka.ru/
```

---

## 🎯 Рекомендации по выбору

| Способ | Сложность | Стоимость | Автообновление | Когда использовать |
|--------|-----------|-----------|----------------|-------------------|
| **Vercel/Netlify** | ⭐ Легко | 💰 Бесплатно | ✅ Да | **РЕКОМЕНДУЕТСЯ** для большинства |
| **Docker Compose + Nginx Proxy** | ⭐⭐ Средне | 💰💰 VPS ~$5/мес | ✅ Да | Если нужен VPS для других сервисов |
| **Certbot на хосте** | ⭐⭐⭐ Сложно | 💰💰 VPS ~$5/мес | ✅ Да (cron) | Полный контроль над конфигурацией |

---

## 📋 Чек-лист настройки HTTPS

- [ ] Домен указывает на ваш сервер (DNS A-запись)
- [ ] Порты 80 и 443 открыты в файрволе
- [ ] SSL сертификат получен успешно
- [ ] HTTPS работает (https://ваш-домен)
- [ ] HTTP → HTTPS редирект работает
- [ ] Все ресурсы загружаются по HTTPS (нет mixed content)
- [ ] SSL Labs Score: A или A+
- [ ] Настроено автоматическое продление сертификата
- [ ] Security headers добавлены

---

## 🚨 Типичные проблемы

### 1. "Failed to obtain certificate"

**Причина:** Certbot не может связаться с вашим сервером

**Решение:**
- Проверьте, что домен указывает на правильный IP
- Убедитесь, что порт 80 открыт и не занят
- Попробуйте с флагом `--dry-run` для теста

### 2. "Mixed content" ошибки

**Причина:** На HTTPS странице загружаются HTTP ресурсы

**Решение:**
- Проверьте `nuxt.config.ts` - все URL должны быть HTTPS или относительными
- Используйте относительные пути для изображений

### 3. Сертификат не обновляется автоматически

**Причина:** Cron не настроен или не работает

**Решение:**
```bash
# Протестировать обновление
sudo certbot renew --dry-run

# Проверить cron
sudo systemctl status cron
```

---

## 💡 Итоговая рекомендация для вашего проекта

**Для landing page "СочиНяшка":**

### ✅ Оптимальный вариант: **Vercel или Netlify**

**Причины:**
- Бесплатно
- SSL автоматически (за 30 секунд)
- CDN для быстрой загрузки по всему миру
- Автодеплой из Git
- Нулевая настройка HTTPS

**Когда использовать Docker + Let's Encrypt:**
- Если у вас уже есть VPS
- Если нужно размещать несколько проектов
- Если требуется полный контроль

---

## 📚 Дополнительные ресурсы

- Let's Encrypt документация: https://letsencrypt.org/docs/
- Nginx SSL конфигурация: https://ssl-config.mozilla.org/
- Docker Nginx Proxy: https://github.com/nginx-proxy/nginx-proxy
- Certbot документация: https://certbot.eff.org/

---

**Готово!** Следуйте инструкциям для вашего способа хостинга. 🔒
