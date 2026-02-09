<template>
  <article 
    class="bg-light-bg-card dark:bg-dark-bg-card rounded-card p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-shadow"
    :class="{ 'border-2 border-primary/20 dark:border-primary-light/20': isChild }"
  >
    <!-- Декоративные кавычки -->
    <div class="mb-4">
      <svg class="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 dark:text-primary-light/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>

    <!-- Текст отзыва -->
    <blockquote class="mb-6">
      <p class="text-base sm:text-lg text-light-text dark:text-dark-text leading-relaxed italic">
        {{ text }}
      </p>
    </blockquote>

    <!-- Автор -->
    <div class="flex items-center gap-4">
      <!-- Аватар -->
      <div 
        class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl"
        :class="isChild ? 'bg-secondary/10 dark:bg-secondary-light/10' : 'bg-primary/10 dark:bg-primary-light/10'"
      >
        {{ avatar }}
      </div>

      <!-- Имя и роль -->
      <div>
        <cite class="not-italic font-heading font-semibold text-base sm:text-lg text-light-text dark:text-dark-text block">
          {{ author }}
        </cite>
        <p class="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary">
          {{ role }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  text: string
  author: string
  role: string
  avatar: string
  isChild?: boolean
}

withDefaults(defineProps<Props>(), {
  isChild: false
})
</script>
