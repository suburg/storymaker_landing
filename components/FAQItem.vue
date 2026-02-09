<template>
  <div class="border-b border-light-bg-card dark:border-dark-border">
    <!-- Вопрос (кнопка) -->
    <button
      class="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left hover:text-primary dark:hover:text-primary-light transition-colors"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <span class="font-heading font-semibold text-lg sm:text-xl text-light-text dark:text-dark-text">
        {{ question }}
      </span>
      
      <!-- Иконка стрелки -->
      <svg 
        class="w-6 h-6 flex-shrink-0 text-primary dark:text-primary-light transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Ответ (раскрывающийся) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div 
        v-show="isOpen"
        class="overflow-hidden"
      >
        <div class="pb-5 sm:pb-6 pr-12">
          <p class="text-base sm:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {{ answer }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  question: string
  answer: string
  isOpen: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  toggle: []
}>()

const toggle = () => {
  emit('toggle')
}
</script>
