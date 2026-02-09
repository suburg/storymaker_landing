<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click="handleOverlayClick"
      >
        <!-- Модальное окно -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div 
            v-if="isOpen && story"
            class="relative bg-light-bg dark:bg-dark-bg rounded-card shadow-card-hover max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            @click.stop
          >
            <!-- Кнопка закрытия -->
            <button 
              class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-light-bg-card dark:bg-dark-bg-card hover:bg-light-bg-alt dark:hover:bg-dark-bg-alt flex items-center justify-center transition-colors z-10"
              @click="closeModal"
              aria-label="Закрыть"
            >
              <svg class="w-6 h-6 text-light-text dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Контент -->
            <div class="p-6 sm:p-8 lg:p-10">
              <!-- Заголовок -->
              <h3 class="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 text-light-text dark:text-dark-text pr-12">
                {{ story.title }}
              </h3>

              <!-- Мета-информация -->
              <div class="flex items-center gap-4 mb-6 text-light-text-secondary dark:text-dark-text-secondary">
                <span class="px-3 py-1 bg-light-bg-card dark:bg-dark-bg-card rounded-full text-sm font-medium">
                  {{ story.genre }}
                </span>
                <span class="text-sm">
                  Автор: {{ story.authorAge }} лет
                </span>
              </div>

              <!-- Отрывок -->
              <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-base sm:text-lg leading-relaxed text-light-text dark:text-dark-text whitespace-pre-line">
                  {{ story.excerpt }}
                </p>
              </div>

              <!-- Призыв к действию -->
              <div class="mt-8 pt-6 border-t border-light-bg-card dark:border-dark-border">
                <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 text-center">
                  Создай свою историю в СочиНяшке!
                </p>
                <div class="flex justify-center">
                  <CTAButton 
                    variant="primary" 
                    size="md"
                    href="https://t.me/SochiNyashkaBot"
                  >
                    Начать сочинять 🚀
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Story {
  id: string
  title: string
  genre: string
  authorAge: number
  excerpt: string
}

interface Props {
  isOpen: boolean
  story: Story | null
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}

const handleOverlayClick = () => {
  closeModal()
}
</script>
