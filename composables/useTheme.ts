export const useTheme = () => {
  // Реактивное состояние темы
  const theme = useState<'light' | 'dark'>('theme', () => {
    // По умолчанию используем системные настройки
    if (process.client) {
      // Проверяем сохранённое значение в localStorage
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      if (savedTheme) {
        return savedTheme
      }
      
      // Если нет сохранённого значения, используем системные настройки
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  // Функция переключения темы
  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme
    
    if (process.client) {
      // Сохраняем выбор в localStorage
      localStorage.setItem('theme', newTheme)
      
      // Применяем класс к html элементу
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // Инициализация темы при монтировании
  if (process.client) {
    onMounted(() => {
      // Применяем сохранённую или системную тему
      if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })

    // Отслеживаем изменение системных настроек
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      // Если пользователь не выбирал тему вручную, обновляем по системным настройкам
      if (!localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light'
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    // Очистка при размонтировании
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }

  return {
    theme,
    toggleTheme
  }
}
