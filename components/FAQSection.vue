<template>
  <section 
    id="faq"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg-alt dark:bg-dark-bg-alt"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Ответы на частые вопросы
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Всё, что нужно знать о СочиНяшке
        </p>
      </div>

      <!-- Список вопросов (аккордеон) -->
      <div class="max-w-4xl mx-auto bg-light-bg-card dark:bg-dark-bg-card rounded-card shadow-card p-6 sm:p-8">
        <FAQItem
          v-for="(item, index) in faqItems"
          :key="index"
          :question="item.question"
          :answer="item.answer"
          :is-open="activeFAQ === index"
          @toggle="toggleFAQ(index)"
        />
      </div>

      <!-- Дополнительная помощь -->
      <div class="text-center mt-12">
        <p class="text-base sm:text-lg text-light-text-secondary dark:text-dark-text-secondary mb-4">
          Не нашли ответ на свой вопрос?
        </p>
        <a 
          href="mailto:suburg@gmail.com"
          class="inline-flex items-center gap-2 text-primary dark:text-primary-light font-medium hover:underline"
        >
          Напишите нам
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFAQ = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  activeFAQ.value = activeFAQ.value === index ? null : index
}

const faqItems = [
  {
    question: 'Бот бесплатный?',
    answer: 'Да, СочиНяшка полностью бесплатен. Никаких скрытых платежей или подписок.'
  },
  {
    question: 'Нужно ли устанавливать приложение?',
    answer: 'Нет, бот работает прямо в Telegram. Просто начните диалог.'
  },
  {
    question: 'Для какого возраста подходит?',
    answer: 'Рекомендуем для детей 8-12 лет, которые уже умеют читать и писать.'
  },
  {
    question: 'Безопасен ли контент для детей?',
    answer: 'Да, бот использует фильтрацию контента и создаёт только детские истории без неподходящих тем.'
  },
  {
    question: 'Можно ли посмотреть старые истории?',
    answer: 'Конечно! Все истории сохраняются в боте. Команда /my_stories покажет вашу библиотеку.'
  },
  {
    question: 'Нужен ли интернет?',
    answer: 'Да, бот работает онлайн через Telegram.'
  },
  {
    question: 'Что делать, если бот не отвечает?',
    answer: 'Напишите нам в поддержку: suburg@gmail.com'
  }
]
</script>
