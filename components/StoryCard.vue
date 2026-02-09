<template>
  <article 
    class="group bg-light-bg-card dark:bg-dark-bg-card rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer"
    @click="handleClick"
  >
    <!-- Обложка -->
    <div class="relative aspect-[3/4] overflow-hidden">
      <!-- Реальное изображение (если есть) -->
      <img 
        v-if="coverImage"
        :src="coverImage"
        :alt="`Обложка истории ${title}`"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      
      <!-- Placeholder с градиентом и эмодзи -->
      <div 
        v-else
        :class="coverGradient"
        class="w-full h-full bg-gradient-to-br flex items-center justify-center"
      >
        <span class="text-8xl sm:text-9xl group-hover:scale-110 transition-transform duration-500">
          {{ coverEmoji }}
        </span>
      </div>

      <!-- Overlay с жанром -->
      <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-light-text dark:text-dark-text">
        {{ genre }}
      </div>
    </div>

    <!-- Контент карточки -->
    <div class="p-5 sm:p-6">
      <!-- Название -->
      <h3 class="font-heading font-bold text-lg sm:text-xl mb-2 text-light-text dark:text-dark-text line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
        {{ title }}
      </h3>

      <!-- Мета-информация -->
      <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">
        {{ genre }} • {{ authorAge }} лет
      </p>

      <!-- Кнопка -->
      <button 
        class="text-primary dark:text-primary-light font-medium text-sm sm:text-base hover:underline flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-lg p-1 -ml-1"
        @click.stop="handleClick"
        :aria-label="`Читать отрывок истории ${title}`"
      >
        Читать отрывок
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
  genre: string
  authorAge: number
  coverEmoji: string
  coverGradient: string
  coverImage?: string  // Опциональный путь к реальному изображению
  excerpt: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  openModal: [story: {
    id: string
    title: string
    genre: string
    authorAge: number
    excerpt: string
  }]
}>()

const handleClick = () => {
  emit('openModal', {
    id: props.id,
    title: props.title,
    genre: props.genre,
    authorAge: props.authorAge,
    excerpt: props.excerpt
  })
}
</script>
