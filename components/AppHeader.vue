<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-light-bg/80 dark:bg-dark-bg/80 border-b border-light-bg-card dark:border-dark-border transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Логотип -->
        <div class="flex items-center">
          <a href="#" class="flex items-center gap-2 sm:gap-3 group">
            <!-- Логотип-иконка -->
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-105 transition-transform">
              <div class="w-full h-full rounded-xl bg-light-bg dark:bg-dark-bg flex items-center justify-center text-2xl sm:text-3xl">
                🐻
              </div>
            </div>
            
            <!-- Название -->
            <span class="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СочиНяшка
            </span>
          </a>
        </div>

        <!-- Переключатель темы -->
        <button 
          @click="toggleTheme"
          class="p-2.5 sm:p-3 rounded-xl bg-light-bg-card dark:bg-dark-bg-card hover:scale-105 active:scale-95 transition-all shadow-card hover:shadow-card-hover"
          aria-label="Переключить тему"
        >
          <span v-if="theme === 'light'" class="text-xl sm:text-2xl">🌙</span>
          <span v-else class="text-xl sm:text-2xl">☀️</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>
