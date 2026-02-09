<template>
  <div :class="theme" class="min-h-screen transition-colors duration-300">
    <!-- Основной контейнер с фоном -->
    <div class="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-body">
      
      <!-- Шапка -->
      <AppHeader />

      <!-- Главный контент -->
      <main>
        <!-- Hero-секция -->
        <HeroSection />

        <!-- Placeholder для будущих секций -->
        <section id="how-it-works" class="min-h-screen flex items-center justify-center bg-light-bg-alt dark:bg-dark-bg-alt">
          <div class="text-center p-8">
            <h2 class="font-heading font-bold text-h1 mb-4 text-light-text dark:text-dark-text">
              Как это работает?
            </h2>
            <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary">
              Эта секция будет реализована в следующей итерации
            </p>
          </div>
        </section>
      </main>

      <!-- Футер -->
      <footer class="text-center py-8 border-t border-light-bg-card dark:border-dark-border text-sm text-light-text-secondary dark:text-dark-text-secondary">
        <p>© 2026 СочиНяшка. Все права защищены.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme()

// Мета-теги для SEO
useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>

