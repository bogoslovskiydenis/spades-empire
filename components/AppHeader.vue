<template>
  <header class="header">
    <!-- Overlay -->
    <div
        class="menu-overlay"
        :class="{ 'is-visible': menuOpen }"
        @click="closeMenu"
    ></div>

    <div class="header-container">
      <!-- Logo -->
      <NuxtLink to="/" class="header-logo">
        <img :src="logoUrl" :alt="logoAlt" class="logo-image" />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="header-nav" :class="{ 'is-open': menuOpen }">
        <NuxtLink
            v-for="(item, index) in menu"
            :key="index"
            :to="item.permalink"
            class="nav-link"
            @click="closeMenu"
        >
          {{ item.title }}
        </NuxtLink>
      </nav>

      <!-- Auth Buttons & Burger -->
      <div class="header-actions">
        <AppButton variant="signup" tag="a" :href="config.public.ref_sign_up" target="_blank">Sign Up</AppButton>

        <!-- Burger Menu Button -->
        <button
            class="burger-menu"
            :class="{ 'is-active': menuOpen }"
            @click="toggleMenu"
            aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import logoDefault from '~/assets/images/SpinEmpire.svg'

// Получаем данные через общий composable (переиспользует кэш между компонентами)
const { data: pageData } = await useMainPageData()

const menuOpen = ref(false)

// Получаем опции из данных
const options = computed(() => {
  if (!pageData.value?.body?.options) return {}
  return pageData.value.body.options.reduce((acc, option) => {
    acc[option.key] = option.value
    return acc
  }, {})
})

// Logo
const logoUrl = computed(() => options.value.logo?.fullSettings?.[0] || logoDefault)
const logoAlt = computed(() => options.value.logo?.alt || 'SpinEmpire')

// Меню
const menu = computed(() => pageData.value?.body?.menu || [])

// Ссылка для кнопки Sign Up
const headerButtonLink = computed(() => options.value.header_button_link || 'https://spinempire.sbs/df2favs0t')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Блокировка скролла при открытом меню
watch(menuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      const scrollY = window.scrollY
      document.documentElement.classList.add('menu-open')
      document.body.classList.add('menu-open')
      document.body.style.top = `-${scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.documentElement.classList.remove('menu-open')
      document.body.classList.remove('menu-open')
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }
})

// Очистка при размонтировании компонента
onMounted(() => {
  return () => {
    if (process.client) {
      document.documentElement.classList.remove('menu-open')
      document.body.classList.remove('menu-open')
      document.body.style.top = ''
    }
  }
})

const config = useRuntimeConfig()
</script>

<style scoped>
.header {
  background: #171821;
  height: 72px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 40px;
}

.header-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-self: start;
}

.logo-image {
  height: 40px;
  width: auto;
  display: block;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 40px;
  justify-self: center;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-self: end;
}

/* Menu Overlay */
.menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 997;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.menu-overlay.is-visible {
  opacity: 1;
  pointer-events: auto;
}

/* Burger Menu */
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;
}

.burger-menu span {
  width: 100%;
  height: 3px;
  background: var(--menu-link);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-menu.is-active span:nth-child(1) {
  transform: translateY(10.5px) rotate(45deg);
}

.burger-menu.is-active span:nth-child(2) {
  opacity: 0;
}

.burger-menu.is-active span:nth-child(3) {
  transform: translateY(-10.5px) rotate(-45deg);
}

/* Mobile Menu Toggle (hidden by default) */
@media (max-width: 1400px) {
  .header-container {
    padding: 0 40px;
  }
}

@media (max-width: 968px) {
  .header-container {
    padding: 0 20px;
  }

  .header-nav {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .header-container {
    gap: 16px;
    grid-template-columns: auto 1fr;
    padding: 0 16px;
  }

  .menu-overlay {
    display: block;
  }

  .burger-menu {
    display: flex;
  }

  .header-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    max-width: 80%;
    height: 100vh;
    background: #171821;
    flex-direction: column;
    gap: 0;
    padding-top: 100px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
    z-index: 998;
    overflow-y: auto;
  }

  .header-nav.is-open {
    transform: translateX(0);
  }

  .header-nav .nav-link {
    padding: 20px 24px;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    display: block;
  }

  .header-nav .nav-link:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .header-nav .nav-link.router-link-active {
    background: rgba(255, 207, 104, 0.1);
    color: #FFCF68;
  }
}

@media (max-width: 360px) {
  .header-container {
    padding: 0 12px;
  }

  .header-nav {
    width: 240px;
  }
}
</style>

