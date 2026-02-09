<template>
  <div :class="theme" class="min-h-screen transition-colors duration-300">
    <!-- Основной контейнер с фоном -->
    <div class="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-body">
      
      <!-- Шапка с переключателем темы -->
      <header class="fixed top-0 right-0 p-6 z-50">
        <button 
          @click="toggleTheme"
          class="p-3 rounded-full bg-light-bg-card dark:bg-dark-bg-card hover:scale-110 transition-transform shadow-card"
          aria-label="Переключить тему"
        >
          <span v-if="theme === 'light'" class="text-2xl">🌙</span>
          <span v-else class="text-2xl">☀️</span>
        </button>
      </header>

      <!-- Главный контент -->
      <main class="container mx-auto px-4 py-20">
        <div class="flex flex-col items-center justify-center min-h-[80vh] text-center">
          
          <!-- Логотип/Изображение мишки -->
          <div class="mb-8 animate-bounce-slow">
            <div class="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-2">
              <div class="w-full h-full rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center text-8xl">
                🐻
              </div>
            </div>
          </div>

          <!-- Заголовок -->
          <h1 class="font-heading font-bold text-hero mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            СочиНяшка
          </h1>

          <!-- Подзаголовок -->
          <p class="text-h3 font-heading mb-4 text-light-text-secondary dark:text-dark-text-secondary max-w-3xl">
            Создавай свои истории — мы поможем!
          </p>

          <!-- Описание -->
          <p class="text-xl mb-8 text-light-text-secondary dark:text-dark-text-secondary max-w-2xl">
            ИИ-бот для детей 8-12 лет, который помогает сочинять сказки, приключения и детективы прямо в Telegram
          </p>

          <!-- Бейджи -->
          <div class="flex flex-wrap gap-4 justify-center mb-8">
            <span class="px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">
              🛡️ Безопасно для детей
            </span>
            <span class="px-4 py-2 bg-accent-yellow/10 text-accent-yellow rounded-full text-sm font-medium">
              🎁 100% бесплатно
            </span>
            <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              📵 Без рекламы
            </span>
          </div>

          <!-- Статус -->
          <div class="text-2xl font-heading text-primary dark:text-primary-light">
            ✨ Скоро запуск ✨
          </div>

          <!-- Информация о прогрессе -->
          <div class="mt-12 p-6 bg-light-bg-card dark:bg-dark-bg-card rounded-card shadow-card max-w-md">
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              <strong class="text-primary dark:text-primary-light">Итерация 1:</strong> Настройка проекта завершена ✅
            </p>
            <p class="text-xs mt-2 text-light-text-secondary dark:text-dark-text-secondary">
              Следующий шаг: Hero-секция и навигация
            </p>
          </div>
        </div>
      </main>

      <!-- Футер -->
      <footer class="text-center py-8 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        <p>© 2026 СочиНяшка. Все права защищены.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<style>
/* Глобальные стили */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
