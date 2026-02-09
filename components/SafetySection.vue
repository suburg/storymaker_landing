<template>
  <section 
    id="safety"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg dark:bg-dark-bg"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-block mb-4">
          <span class="text-6xl sm:text-7xl">🛡️</span>
        </div>
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Безопасно для детей
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Мы заботимся о безопасности каждого ребёнка
        </p>
      </div>

      <!-- Список гарантий -->
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div 
            v-for="feature in safetyFeatures" 
            :key="feature.text"
            class="flex items-start gap-4 p-6 bg-light-bg-card dark:bg-dark-bg-card rounded-card shadow-card hover:shadow-card-hover transition-shadow"
          >
            <!-- Иконка -->
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green/10 dark:bg-accent-green-light/10 flex items-center justify-center text-2xl">
              {{ feature.icon }}
            </div>
            
            <!-- Текст -->
            <div class="flex-1">
              <p class="text-base sm:text-lg text-light-text dark:text-dark-text leading-relaxed">
                {{ feature.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const safetyFeatures = [
  {
    icon: '🛡️',
    text: 'Контент-фильтрация: защита от неподходящих тем'
  },
  {
    icon: '🚫',
    text: 'Без рекламы и покупок внутри приложения'
  },
  {
    icon: '🔒',
    text: 'Данные не передаются третьим лицам'
  },
  {
    icon: '💬',
    text: 'Работает в Telegram — знакомая среда'
  },
  {
    icon: '👨‍👩‍👧',
    text: 'Родительский контроль через Telegram'
  }
]
</script>
