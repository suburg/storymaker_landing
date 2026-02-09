<template>
  <footer class="bg-light-text/5 dark:bg-dark-bg-alt border-t border-light-bg-card dark:border-dark-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <!-- Основной контент Footer -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        
        <!-- Колонка 1: О проекте -->
        <div class="lg:col-span-1">
          <!-- Логотип -->
          <a href="#" class="inline-flex items-center gap-2 sm:gap-3 group mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-105 transition-transform">
              <div class="w-full h-full rounded-xl bg-light-bg dark:bg-dark-bg flex items-center justify-center text-2xl sm:text-3xl">
                🐻
              </div>
            </div>
            <span class="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СочиНяшка
            </span>
          </a>
          
          <p class="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary mb-4">
            ИИ-бот для создания детских историй
          </p>
          
          <a 
            href="https://t.me/SochiNyashkaBot"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-primary dark:text-primary-light hover:underline font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
            aria-label="Перейти к Telegram-боту СочиНяшка"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.001.321.023.465.141.122.098.155.23.171.324.016.094.037.308.021.475z"/>
            </svg>
            @SochiNyashkaBot
          </a>
        </div>

        <!-- Колонка 2: Навигация -->
        <nav aria-label="Основная навигация по странице">
          <h3 class="font-heading font-semibold text-base sm:text-lg text-light-text dark:text-dark-text mb-4">
            Навигация
          </h3>
          <ul class="space-y-2">
            <li v-for="link in navigationLinks" :key="link.href">
              <a 
                :href="link.href"
                class="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5 inline-block"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Колонка 3: Информация -->
        <nav aria-label="Дополнительная информация">
          <h3 class="font-heading font-semibold text-base sm:text-lg text-light-text dark:text-dark-text mb-4">
            Информация
          </h3>
          <ul class="space-y-2">
            <li v-for="link in infoLinks" :key="link.href">
              <a 
                :href="link.href"
                class="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5 inline-block"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Колонка 4: Контакты -->
        <div>
          <h3 class="font-heading font-semibold text-base sm:text-lg text-light-text dark:text-dark-text mb-4">
            Контакты
          </h3>
          <ul class="space-y-3">
            <li>
              <a 
                href="mailto:suburg@gmail.com"
                class="inline-flex items-center gap-2 text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
                aria-label="Написать письмо на почту поддержки"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                suburg@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/SochiNyashkaBot"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
                aria-label="Открыть бота СочиНяшка в Telegram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.001.321.023.465.141.122.098.155.23.171.324.016.094.037.308.021.475z"/>
                </svg>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Разделитель -->
      <div class="border-t border-light-bg-card dark:border-dark-border pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary text-center sm:text-left">
            © 2026 СочиНяшка. Все права защищены.
          </p>

          <!-- Дополнительные ссылки -->
          <nav aria-label="Юридическая информация" class="flex items-center gap-6">
            <a 
              href="#privacy"
              class="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
            >
              Политика конфиденциальности
            </a>
            <a 
              href="#terms"
              class="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
            >
              Условия использования
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigationLinks = [
  { text: 'Возможности', href: '#features' },
  { text: 'Как это работает', href: '#how-it-works' },
  { text: 'Преимущества', href: '#benefits' },
  { text: 'Примеры историй', href: '#gallery' },
  { text: 'Безопасность', href: '#safety' },
  { text: 'FAQ', href: '#faq' }
]

const infoLinks = [
  { text: 'О проекте', href: '#' },
  { text: 'Отзывы', href: '#testimonials' },
  { text: 'Поддержка', href: 'mailto:suburg@gmail.com' }
]
</script>
