<template>
  <component 
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
    class="inline-flex items-center justify-center gap-2 font-heading font-bold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg dark:focus-visible:ring-offset-dark-bg"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'lg'
})

const buttonClasses = computed(() => {
  const baseClasses = 'rounded-button whitespace-nowrap'
  
  // Размеры
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-w-[120px]',
    md: 'px-6 py-3 text-base min-w-[160px]',
    lg: 'px-8 py-4 text-lg min-w-[200px] sm:min-w-[240px]'
  }
  
  // Варианты стилей
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-card hover:shadow-card-hover hover:scale-105 active:scale-100',
    secondary: 'bg-light-bg-card dark:bg-dark-bg-card text-light-text dark:text-dark-text shadow-card hover:shadow-card-hover hover:scale-105 active:scale-100',
    outline: 'border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary-light/10 hover:scale-105 active:scale-100'
  }
  
  return `${baseClasses} ${sizeClasses[props.size]} ${variantClasses[props.variant]}`
})
</script>
