<template>
  <div class="relative flex gap-6 sm:gap-8">
    <!-- Линия и номер -->
    <div class="flex flex-col items-center">
      <!-- Номер шага -->
      <div 
        class="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-xl sm:text-2xl shadow-card z-10"
      >
        {{ number }}
      </div>

      <!-- Вертикальная линия (если не последний шаг) -->
      <div 
        v-if="!isLast"
        class="w-1 flex-1 mt-4 bg-gradient-to-b from-primary/50 to-secondary/50 dark:from-primary-light/50 dark:to-secondary-light/50 min-h-[80px]"
      ></div>
    </div>

    <!-- Контент шага -->
    <div class="flex-1 pb-12" :class="{ 'pb-0': isLast }">
      <!-- Заголовок -->
      <h3 class="font-heading font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-light-text dark:text-dark-text">
        {{ title }}
      </h3>

      <!-- Список пунктов -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: number
  title: string
  items: string[]
  isLast?: boolean
}

withDefaults(defineProps<Props>(), {
  isLast: false
})
</script>
