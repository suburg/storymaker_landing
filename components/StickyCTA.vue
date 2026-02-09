<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div 
        v-if="showStickyCTA"
        class="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-dark-bg shadow-card-hover border-t border-light-bg-card dark:border-dark-border"
      >
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            <!-- Текст -->
            <div class="hidden sm:block">
              <p class="font-heading font-semibold text-base lg:text-lg text-light-text dark:text-dark-text">
                Начни создавать истории прямо сейчас!
              </p>
            </div>

            <!-- Кнопка -->
            <a
              href="https://t.me/SochiNyashkaBot"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-heading font-bold text-base rounded-button shadow-card hover:shadow-card-hover hover:scale-105 active:scale-100 transition-all duration-300 whitespace-nowrap"
            >
              Начать в Telegram 🚀
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { isScrolled } = useScroll()
const isFinalCTAVisible = ref(false)

const showStickyCTA = computed(() => {
  return isScrolled.value && !isFinalCTAVisible.value
})

if (process.client) {
  onMounted(() => {
    const finalCTAElement = document.getElementById('final-cta')
    
    if (finalCTAElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isFinalCTAVisible.value = entry.isIntersecting
          })
        },
        {
          threshold: 0.1
        }
      )
      
      observer.observe(finalCTAElement)
      
      onUnmounted(() => {
        observer.disconnect()
      })
    }
  })
}
</script>
