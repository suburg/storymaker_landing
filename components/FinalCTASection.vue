<template>
  <section 
    id="final-cta"
    class="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent-orange dark:from-primary/90 dark:via-secondary/90 dark:to-accent-orange/90"
  >
    <!-- Декоративные элементы -->
    <div class="absolute top-10 left-10 text-4xl sm:text-6xl opacity-20 animate-bounce-slow">✨</div>
    <div class="absolute top-20 right-20 text-3xl sm:text-5xl opacity-20 animate-bounce-slow" style="animation-delay: 0.5s;">🚀</div>
    <div class="absolute bottom-20 left-20 text-3xl sm:text-5xl opacity-20 animate-bounce-slow" style="animation-delay: 1s;">📖</div>
    <div class="absolute bottom-10 right-10 text-4xl sm:text-6xl opacity-20 animate-bounce-slow" style="animation-delay: 1.5s;">🌟</div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-10 sm:mb-12">
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white">
            Готов создать свою первую историю?
          </h2>
          <p class="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Запусти бота в Telegram и начни сочинять уже сейчас — это бесплатно!
          </p>
        </div>

        <!-- CTA блок с кнопкой и QR-кодом -->
        <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8">
          <!-- Кнопка -->
          <div class="flex flex-col items-center gap-4">
            <a
              href="https://t.me/SochiNyashkaBot"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-heading font-bold text-lg sm:text-xl rounded-button shadow-card-hover hover:scale-105 active:scale-100 transition-all duration-300 min-w-[280px] sm:min-w-[320px]"
            >
              Начать в Telegram 🚀
            </a>
            
            <!-- Текстовая ссылка -->
            <a 
              href="https://t.me/SochiNyashkaBot"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/90 hover:text-white font-medium transition-colors"
            >
              @SochiNyashkaBot
            </a>
          </div>

          <!-- QR-код -->
          <div class="flex flex-col items-center gap-3">
            <div class="bg-white p-4 rounded-card shadow-card-hover">
              <!-- Визуальный placeholder для QR-кода -->
              <div class="w-40 h-40 sm:w-44 sm:h-44 bg-light-bg-card dark:bg-dark-bg-card rounded flex flex-col items-center justify-center gap-3 border-4 border-light-text/10">
                <svg class="w-20 h-20 text-light-text/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h3v3h-3v-3zm0 4h3v3h-3v-3zm-5 0h3v6h-3v-6zm5-9h3v3h-3V8z"/>
                </svg>
                <p class="text-xs font-bold text-light-text/60 text-center px-2">
                  SCAN ME
                </p>
              </div>
              <!-- Если хотите использовать реальный QR-код, замените div выше на:
              <img 
                src="/images/qr-code.png" 
                alt="QR-код для быстрого доступа к боту"
                class="w-40 h-40 sm:w-44 sm:h-44"
                width="176"
                height="176"
              />
              -->
            </div>
            <p class="text-sm sm:text-base text-white/80 font-medium">
              Сканируй и начинай!
            </p>
          </div>
        </div>

        <!-- Инструкция -->
        <div class="text-center">
          <p class="text-base sm:text-lg text-white/80">
            Просто напиши <code class="px-2 py-1 bg-white/20 rounded text-white font-mono">/start</code> в диалоге с ботом
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент не требует дополнительной логики
</script>

<style scoped>
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
