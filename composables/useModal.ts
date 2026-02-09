interface Story {
  id: string
  title: string
  genre: string
  authorAge: number
  excerpt: string
}

export const useModal = () => {
  const isOpen = useState<boolean>('modal-open', () => false)
  const activeStory = useState<Story | null>('active-story', () => null)

  const openModal = (story: Story) => {
    activeStory.value = story
    isOpen.value = true
    
    // Блокировка прокрутки body
    if (process.client) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    isOpen.value = false
    activeStory.value = null
    
    // Восстановление прокрутки
    if (process.client) {
      document.body.style.overflow = ''
    }
  }

  // Закрытие по Escape
  if (process.client) {
    onMounted(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen.value) {
          closeModal()
        }
      }
      window.addEventListener('keydown', handleEscape)
      
      onUnmounted(() => {
        window.removeEventListener('keydown', handleEscape)
        // Восстановление прокрутки при размонтировании
        document.body.style.overflow = ''
      })
    })
  }

  return {
    isOpen,
    activeStory,
    openModal,
    closeModal
  }
}
