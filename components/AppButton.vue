<template>
  <component
      :is="tag"
      :class="buttonClass"
      :type="tag === 'button' ? type : undefined"
      :to="tag === 'NuxtLink' ? to : undefined"
      :href="tag === 'a' ? href : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'login' | 'signup' | 'primary' | 'secondary'
  tag?: 'button' | 'a' | 'NuxtLink'
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  tag: 'button',
  type: 'button'
})

const buttonClass = computed(() => {
  const classes = ['btn']

  if (props.variant === 'login' || props.variant === 'secondary') {
    classes.push('btn-login')
  } else if (props.variant === 'signup' || props.variant === 'primary') {
    classes.push('btn-signup')
  }

  return classes.join(' ')
})
</script>



