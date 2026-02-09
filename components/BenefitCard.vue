<template>
  <article 
    class="bg-light-bg-card dark:bg-dark-bg-card rounded-card p-6 sm:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover"
  >
    <!-- Иконка -->
    <div class="mb-4 sm:mb-6">
      <div class="text-5xl sm:text-6xl">
        {{ icon }}
      </div>
    </div>

    <!-- Заголовок -->
    <h3 class="font-heading font-bold text-xl sm:text-2xl mb-4 text-light-text dark:text-dark-text">
      {{ title }}
    </h3>

    <!-- Список преимуществ -->
    <ul class="space-y-2 sm:space-y-3">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="flex items-start gap-3"
      >
        <!-- Маркер -->
        <span class="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-primary-light mt-2"></span>
        
        <!-- Текст -->
        <span class="text-base sm:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {{ item }}
        </span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  items: string[]
}

defineProps<Props>()
</script>
