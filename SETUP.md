# Инструкция по установке проекта

## 1. Установка зависимостей

Выполните в терминале в корне проекта:

```bash
npm install
```

Если возникнут ошибки с peer dependencies, используйте:

```bash
npm install --legacy-peer-deps
```

## 2. Запуск проекта в режиме разработки

```bash
npm run dev
```

Проект будет доступен по адресу: http://localhost:3000

## 3. Проверка работоспособности

После запуска проверьте:
- ✅ Страница загружается без ошибок
- ✅ Переключатель темы (солнце/луна) работает в правом верхнем углу
- ✅ Тема сохраняется после перезагрузки страницы
- ✅ Шрифты Nunito и Inter загружены
- ✅ Цвета меняются при переключении темы

## 4. Статическая генерация (для production)

```bash
npm run generate
```

Результат будет в папке `.output/public/`

## 5. Просмотр production сборки

```bash
npm run preview
```

---

## Favicon

Разместите следующие файлы в папке `public/`:

- **favicon.ico** - 32x32px и 16x16px (multi-size ICO файл)
- **favicon-32x32.png** - 32×32px
- **favicon-16x16.png** - 16×16px  
- **apple-touch-icon.png** - 180×180px (для iOS)

Используйте логотип мишки СочиНяшки для создания иконок.

---

## Структура проекта

```
storymaker_landing/
├── app.vue                 # Главный компонент приложения
├── nuxt.config.ts         # Конфигурация Nuxt 3
├── tailwind.config.ts     # Конфигурация Tailwind CSS
├── package.json           # Зависимости проекта
├── composables/           # Composables (useTheme)
│   └── useTheme.ts       # Управление темами
├── components/            # Vue компоненты (пока пусто)
├── assets/               # Статические ресурсы
│   └── css/
│       └── tailwind.css  # Tailwind CSS стили
├── public/               # Публичные файлы (favicon здесь)
└── docs/                 # Документация проекта
    ├── landing_page_brief.md
    ├── tasklist.md
    └── workflow.md
```

---

## Возможные проблемы

### Ошибка при установке пакетов

Если `npm install` не работает, попробуйте:

1. Очистить кэш npm:
```bash
npm cache clean --force
```

2. Удалить node_modules и package-lock.json:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. Использовать yarn вместо npm:
```bash
yarn install
yarn dev
```

---

## Следующие шаги

После успешного запуска проекта:
1. ✅ Отметить задачи Итерации 1 в `docs/tasklist.md`
2. ✅ Обновить прогресс проекта
3. ✅ Создать коммит
4. ➡️ Перейти к Итерации 2: Hero-секция и навигация
