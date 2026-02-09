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

        <!-- Секция безопасности -->
        <SafetySection />

        <!-- FAQ -->
        <FAQSection />

        <!-- Отзывы -->
        <TestimonialsSection />

        <!-- Финальная CTA -->
        <FinalCTASection />
      </main>

      <!-- Footer -->
      <AppFooter />

      <!-- Sticky CTA -->
      <StickyCTA />
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

