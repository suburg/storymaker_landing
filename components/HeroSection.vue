<template>
  <section 
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
  >
    <!-- Декоративный фон с градиентом -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-orange/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent-orange/10"></div>
    
    <!-- Декоративные элементы -->
    <div class="absolute top-20 left-10 text-4xl sm:text-6xl opacity-20 animate-bounce-slow">✨</div>
    <div class="absolute top-40 right-20 text-3xl sm:text-5xl opacity-20 animate-bounce-slow" style="animation-delay: 0.5s;">🚀</div>
    <div class="absolute bottom-40 left-20 text-3xl sm:text-5xl opacity-20 animate-bounce-slow" style="animation-delay: 1s;">📖</div>
    <div class="absolute bottom-20 right-10 text-4xl sm:text-6xl opacity-20 animate-bounce-slow" style="animation-delay: 1.5s;">🌟</div>

    <!-- Контент -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <!-- Левая колонка: Текст и CTA -->
          <div class="text-center lg:text-left space-y-6 sm:space-y-8">
            
            <!-- Главный заголовок -->
            <h1 class="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-hero leading-tight">
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Создавай свои истории
              </span>
              <br />
              <span class="text-light-text dark:text-dark-text">
                — мы поможем!
              </span>
            </h1>

            <!-- Подзаголовок -->
            <p class="text-lg sm:text-xl lg:text-2xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ИИ-бот для детей 8-12 лет, который помогает сочинять сказки, приключения и детективы прямо в Telegram
            </p>

            <!-- Бейджи -->
            <div class="py-4">
              <HeroBadges />
            </div>

            <!-- CTA Кнопки -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <CTAButton 
                variant="primary" 
                size="lg"
                href="https://t.me/SochiNyashkaBot"
              >
                Начать сочинять 🚀
              </CTAButton>
              
              <CTAButton 
                variant="outline" 
                size="lg"
                href="#how-it-works"
              >
                Как это работает ↓
              </CTAButton>
            </div>

            <!-- Дополнительная информация -->
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Не требуется регистрация • Работает в Telegram • Бесплатно
            </p>
          </div>

          <!-- Правая колонка: Hero-иллюстрация -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md lg:max-w-lg" role="img" aria-label="Иллюстрация медвежонка СочиНяшка с волшебными элементами сказок">
              
              <!-- Основная иллюстрация (placeholder с эмодзи) -->
              <div class="relative animate-float">
                
                <!-- Главный круг с медведем -->
                <div class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent-orange p-1 shadow-card-hover">
                  <div class="w-full h-full rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center relative overflow-hidden">
                    <!-- Декоративный градиентный фон -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                    
                    <!-- Медведь -->
                    <div class="relative z-10 text-8xl sm:text-9xl lg:text-[180px]">
                      🐻
                    </div>
                  </div>
                </div>

                <!-- Плавающие элементы вокруг -->
                <div class="absolute top-0 -left-4 text-4xl sm:text-5xl animate-bounce-slow" style="animation-delay: 0.2s;">
                  🏰
                </div>
                <div class="absolute top-10 -right-4 text-4xl sm:text-5xl animate-bounce-slow" style="animation-delay: 0.6s;">
                  🐉
                </div>
                <div class="absolute bottom-10 -left-6 text-4xl sm:text-5xl animate-bounce-slow" style="animation-delay: 1.2s;">
                  🪄
                </div>
                <div class="absolute bottom-0 -right-6 text-4xl sm:text-5xl animate-bounce-slow" style="animation-delay: 1.8s;">
                  📚
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Индикатор скролла вниз -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a 
        href="#how-it-works"
        class="flex flex-col items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-lg p-2"
        aria-label="Перейти к разделу 'Как это работает'"
      >
        <span class="text-sm font-medium">Узнать больше</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент не требует дополнительной логики
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
