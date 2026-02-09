<template>
  <section 
    id="gallery"
    class="py-16 sm:py-20 lg:py-28 bg-light-bg-alt dark:bg-dark-bg-alt"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-light-text dark:text-dark-text">
          Посмотри, что уже создали дети
        </h2>
        <p class="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Вдохновись примерами и создай свою уникальную историю
        </p>
      </div>

      <!-- Сетка историй -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <StoryCard
          v-for="story in stories"
          :key="story.id"
          :id="story.id"
          :title="story.title"
          :genre="story.genre"
          :author-age="story.authorAge"
          :cover-emoji="story.coverEmoji"
          :cover-gradient="story.coverGradient"
          :cover-image="story.coverImage"
          :excerpt="story.excerpt"
          @open-modal="handleOpenModal"
        />
      </div>
    </div>

    <!-- Модальное окно -->
    <StoryModal 
      :is-open="isOpen"
      :story="activeStory"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
const { isOpen, activeStory, openModal, closeModal } = useModal()

// Проверка существования изображения (в production можно использовать реальную проверку)
const getStoryImage = (storyId: string) => {
  // Если файл существует в public/images/stories/, вернёт путь
  // Иначе вернёт undefined и будет использован placeholder
  const imagePath = `/images/stories/${storyId}.jpg`
  // В данной реализации возвращаем undefined, чтобы использовать placeholder
  // Когда вы добавите реальные изображения, они будут автоматически использованы
  return undefined // Замените на imagePath когда добавите изображения
}

const stories = [
  {
    id: 'story-1',
    title: 'Приключения капитана Макса на острове драконов',
    genre: 'Приключение',
    authorAge: 9,
    coverEmoji: '🏴‍☠️',
    coverGradient: 'from-orange-400 to-red-500',
    coverImage: getStoryImage('story-1'),
    excerpt: 'Капитан Макс высадился на таинственном острове. Его команда обнаружила следы огромных когтей. «Это драконы!» — воскликнул юнга Тимофей. Макс достал карту сокровищ и решил, что ни один дракон не помешает ему найти золото...'
  },
  {
    id: 'story-2',
    title: 'Тайна пропавших звёзд',
    genre: 'Детектив',
    authorAge: 11,
    coverEmoji: '🔍',
    coverGradient: 'from-blue-500 to-purple-600',
    coverImage: getStoryImage('story-2'),
    excerpt: 'Детектив Ника заметила странное явление: каждую ночь одна звезда исчезала с неба. Никто не знал, куда они деваются. Ника взяла телескоп и решила разгадать эту космическую тайну...'
  },
  {
    id: 'story-3',
    title: 'Волшебный лес и фея Лили',
    genre: 'Сказка',
    authorAge: 8,
    coverEmoji: '🧚‍♀️',
    coverGradient: 'from-green-400 to-pink-500',
    coverImage: getStoryImage('story-3'),
    excerpt: 'В волшебном лесу жила добрая фея по имени Лили. Однажды она нашла заколдованный цветок, который мог исполнить одно желание. Но фея не знала, что загадать...'
  }
]

const handleOpenModal = (story: any) => {
  openModal(story)
}
</script>
