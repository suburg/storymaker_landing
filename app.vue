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

        <!-- Секция возможностей -->
        <FeaturesSection />

        <!-- Секция "Как это работает" -->
        <HowItWorksSection />

        <!-- Секция преимуществ -->
        <BenefitsSection />

        <!-- Галерея историй -->
        <GallerySection />
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

