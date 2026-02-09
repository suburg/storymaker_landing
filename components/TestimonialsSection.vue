<template>
  <section 
    id="testimonials"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg dark:bg-dark-bg"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Что говорят родители
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Реальные отзывы от семей, которые уже используют СочиНяшку
        </p>
      </div>

      <!-- Сетка отзывов -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :text="testimonial.text"
          :author="testimonial.author"
          :role="testimonial.role"
          :avatar="testimonial.avatar"
          :is-child="testimonial.isChild"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text: 'Моя дочка (10 лет) раньше не любила писать сочинения. Но с СочиНяшкой она сама просит телефон, чтобы продолжить свою историю! Уже сочинили 5 сказок, и каждая — особенная.',
    author: 'Мария',
    role: 'мама Сони',
    avatar: '👩‍💼',
    isChild: false
  },
  {
    text: 'Отличный способ совместить экранное время с пользой. Сын теперь меньше в играх, больше сочиняет. Бонус — его грамотность заметно улучшилась!',
    author: 'Дмитрий',
    role: 'папа Артёма (9 лет)',
    avatar: '👨‍💻',
    isChild: false
  },
  {
    text: 'Безопасный контент, никакой рекламы, и ребёнок реально увлечён. Обложки к историям просто чудо! Распечатали и повесили на стену.',
    author: 'Екатерина',
    role: 'мама двоих детей',
    avatar: '👩‍🏫',
    isChild: false
  },
  {
    text: 'Это как игра, только круче! Я придумываю приключения, а бот мне помогает. Мы с ним уже 7 историй написали, и все классные!',
    author: 'Максим',
    role: '11 лет',
    avatar: '🧒',
    isChild: true
  }
]
</script>
