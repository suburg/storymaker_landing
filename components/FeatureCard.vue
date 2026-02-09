<template>
  <article 
    class="group bg-light-bg-card dark:bg-dark-bg-card rounded-card p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
  >
    <!-- Иконка -->
    <div class="mb-4 sm:mb-6">
      <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
    </div>

    <!-- Заголовок -->
    <h3 class="font-heading font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-light-text dark:text-dark-text">
      {{ title }}
    </h3>

    <!-- Описание -->
    <p class="text-base sm:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>
