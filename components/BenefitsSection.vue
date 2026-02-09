<template>
  <section 
    id="benefits"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg dark:bg-dark-bg"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Почему это полезно для ребёнка?
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Развитие важных навыков через игровой формат
        </p>
      </div>

      <!-- Сетка преимуществ -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <BenefitCard
          v-for="benefit in benefits"
          :key="benefit.title"
          :icon="benefit.icon"
          :title="benefit.title"
          :items="benefit.items"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: '📚',
    title: 'Развитие грамотности',
    items: [
      'Практика письма в увлекательной форме',
      'Расширение словарного запаса',
      'Улучшение структуры текста'
    ]
  },
  {
    icon: '💡',
    title: 'Развитие креативности',
    items: [
      'Придумывание сюжетов и персонажей',
      'Нестандартное мышление',
      'Свобода воображения'
    ]
  },
  {
    icon: '🧠',
    title: 'Логическое мышление',
    items: [
      'Построение связного повествования',
      'Причинно-следственные связи',
      'Планирование развития сюжета'
    ]
  },
  {
    icon: '❤️',
    title: 'Позитивная мотивация',
    items: [
      'Похвала за каждую историю',
      'Видимый результат творчества',
      'Формирование любви к чтению и письму'
    ]
  }
]
</script>
