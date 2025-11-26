<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const siteOrigin =
  (runtimeConfig.public.siteUrl || '').replace(/\/+$/, '') || 'https://spinnempire.com'

const canonicalUrl = computed(() => {
  const path = route.path || '/'
  return `${siteOrigin}${path === '/' ? '/' : path}`
})

useHead(() => ({
  link: [
    {
      key: 'canonical',
      rel: 'canonical',
      href: canonicalUrl.value,
    },
  ],
}))
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="main-content">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

