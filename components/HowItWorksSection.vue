<template>
  <section 
    id="how-it-works"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg-alt dark:bg-dark-bg-alt"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Как создать свою историю?
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Всего 4 простых шага до первого произведения
        </p>
      </div>

      <!-- Timeline с шагами -->
      <div class="max-w-3xl mx-auto mb-12 sm:mb-16">
        <TimelineStep
          v-for="(step, index) in steps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :items="step.items"
          :is-last="index === steps.length - 1"
        />
      </div>

      <!-- CTA после timeline -->
      <div class="text-center">
        <CTAButton 
          variant="primary" 
          size="lg"
          href="https://t.me/SochiNyashkaBot"
        >
          Попробовать прямо сейчас 🚀
        </CTAButton>
        
        <p class="mt-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          Начни создавать свою первую историю за 2 минуты
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: 'Начни диалог',
    items: [
      'Открой Telegram и найди бота @SochiNyashkaBot',
      'Нажми /start или /new_story'
    ]
  },
  {
    number: 2,
    title: 'Выбери параметры',
    items: [
      'Жанр (сказка, приключение, детектив...)',
      'Длительность (короткая, средняя, длинная)',
      'Имя главного героя',
      'Кто начинает (ты или бот)',
      'Уровень креативности'
    ]
  },
  {
    number: 3,
    title: 'Сочиняйте вместе',
    items: [
      'Ты пишешь 2-3 предложения (или говоришь голосом)',
      'Бот продолжает историю',
      'Повторяйте, пока история не будет готова'
    ]
  },
  {
    number: 4,
    title: 'Получи результат',
    items: [
      'Бот создаст название',
      'Сгенерирует красивую обложку',
      'Похвалит за креативность',
      'Сохранит историю в твою библиотеку'
    ]
  }
]
</script>
