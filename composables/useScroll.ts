export const useScroll = () => {
  const scrollY = ref(0)
  const isScrolled = computed(() => scrollY.value > 800)

  if (process.client) {
    onMounted(() => {
      const handleScroll = () => {
        scrollY.value = window.scrollY
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
    })
  }

  return {
    scrollY,
    isScrolled
  }
}
