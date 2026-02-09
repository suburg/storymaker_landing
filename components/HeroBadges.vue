<template>
  <div class="flex flex-wrap gap-3 sm:gap-4 justify-center">
    <span 
      v-for="badge in badges" 
      :key="badge.text"
      :class="badge.colorClass"
      class="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm transition-transform hover:scale-105"
    >
      {{ badge.icon }} {{ badge.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const badges = [
  {
    icon: '🛡️',
    text: 'Безопасно',
    colorClass: 'bg-accent-green/10 text-accent-green dark:text-accent-green-light border border-accent-green/20'
  },
  {
    icon: '📵',
    text: 'Без рекламы',
    colorClass: 'bg-secondary/10 text-secondary dark:text-secondary-light border border-secondary/20'
  },
  {
    icon: '🎁',
    text: '100% бесплатно',
    colorClass: 'bg-accent-yellow/10 text-accent-yellow dark:text-accent-yellow-light border border-accent-yellow/20'
  }
]
</script>
