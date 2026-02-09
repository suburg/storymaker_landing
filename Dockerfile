# Dockerfile для СочиНяшка Landing Page
# Multi-stage build для оптимизации размера образа

# ========================================
# Stage 1: Builder - сборка статического сайта
# ========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package файлы для кэширования слоя зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Генерируем статический сайт
RUN npm run generate

# ========================================
# Stage 2: Production - Nginx для раздачи статики
# ========================================
FROM nginx:alpine

# Копируем собранные файлы из builder
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Метаданные
LABEL maintainer="suburg@gmail.com"
LABEL description="Landing page для Telegram-бота СочиНяшка"
LABEL version="1.0"

# Environment variables для nginx-proxy (если используется)
ENV VIRTUAL_HOST=socinyashka.ru
ENV LETSENCRYPT_HOST=socinyashka.ru
ENV LETSENCRYPT_EMAIL=suburg@gmail.com

# Открываем порт 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
