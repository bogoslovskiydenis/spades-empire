<template>
  <div class="dynamic-page">
    <section class="dynamic-section">
      <div class="dynamic-container">
        <h1 class="dynamic-title">{{ pageH1 }}</h1>

        <!-- Shore Description для about-us -->
        <div class="dynamic-shore" v-if="shoreDescription" v-html="shoreDescription"></div>

        <!-- Main Content -->
        <div class="dynamic-content" v-if="pageContent" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

definePageMeta({
  validate: route => typeof route.params.slug === 'string' && !route.params.slug.includes('.')
})

const { fetchPageData } = useWordpressApi()

// Загружаем данные с SSR через useAsyncData
const { data: pageData } = await useAsyncData(`page-${slug}`, () => fetchPageData('pages', slug))

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || 'Page')
const shoreDescription = computed(() => pageData.value?.body?.shore_description || '')
const pageContent = computed(() => pageData.value?.body?.content || '')

// Fallback заголовки для разных страниц
const defaultTitles: Record<string, string> = {
  'privacy-policy': 'Privacy Policy - SpinEmpire',
  'terms-conditions': 'Terms & Conditions - SpinEmpire',
  'responsible-gaming': 'Responsible Gaming - SpinEmpire',
  'about-us': 'About Us - SpinEmpire'
}

const defaultDescriptions: Record<string, string> = {
  'privacy-policy': 'SpinEmpire casino privacy policy',
  'terms-conditions': 'SpinEmpire casino terms and conditions',
  'responsible-gaming': 'Responsible gaming information at SpinEmpire casino',
  'about-us': 'Learn more about SpinEmpire online casino'
}

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || defaultTitles[slug] || 'SpinEmpire',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || defaultDescriptions[slug] || ''
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || defaultTitles[slug] || 'SpinEmpire'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || defaultDescriptions[slug] || ''
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.dynamic-page {
  background: var(--bg-color);
}

.dynamic-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.dynamic-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.dynamic-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Shore Description для about-us */
.dynamic-shore {
  margin-bottom: 48px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.dynamic-shore :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: var(--menu-link);
  margin: 0 0 16px 0;
}

.dynamic-shore :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: var(--white-white-alpha-64);
  margin: 0;
}

/* Стили для HTML контента из API */
.dynamic-content :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.dynamic-content :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.dynamic-content :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.dynamic-content :deep(h4) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 16px 0 8px 0;
}

.dynamic-content :deep(ol),
.dynamic-content :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.dynamic-content :deep(ol li),
.dynamic-content :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.dynamic-content :deep(b),
.dynamic-content :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.dynamic-content :deep(i),
.dynamic-content :deep(em) {
  font-style: italic;
}

.dynamic-content :deep(a) {
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.dynamic-content :deep(a:hover) {
  opacity: 0.8;
}

.dynamic-content :deep(br) {
  display: block;
  margin: 8px 0;
  content: "";
}

/* Responsive */
@media (max-width: 768px) {
  .dynamic-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .dynamic-container {
    width: 100%;
    max-width: 100%;
  }

  .dynamic-title {
    font-size: 24px;
    line-height: 32px;
  }

  .dynamic-shore {
    padding: 16px;
    margin-bottom: 32px;
  }
}

@media (max-width: 360px) {
  .dynamic-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

