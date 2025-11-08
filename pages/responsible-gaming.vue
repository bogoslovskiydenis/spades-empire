<template>
  <div class="responsible-gaming-page">
    <section class="responsible-gaming-section">
      <div class="responsible-gaming-container">
        <h1 class="responsible-gaming-title">{{ pageH1 }}</h1>
        <div class="responsible-gaming-html" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { fetchResponsibleGamingPage } = useWordpressApi()

// Загружаем данные с SSR через useAsyncData
const { data: pageData } = await useAsyncData('responsibleGamingPage', () => fetchResponsibleGamingPage())

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || 'Responsible gaming')
const pageContent = computed(() => pageData.value?.body?.content || '')

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Responsible Gaming - SpinEmpire',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || 'Responsible gaming information at SpinEmpire casino'
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Responsible Gaming - SpinEmpire'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || 'Responsible gaming information at SpinEmpire casino'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.responsible-gaming-page {
  background: var(--bg-color);
}

.responsible-gaming-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.responsible-gaming-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.responsible-gaming-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Стили для HTML контента из API */
.responsible-gaming-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.responsible-gaming-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.responsible-gaming-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.responsible-gaming-html :deep(ol),
.responsible-gaming-html :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.responsible-gaming-html :deep(ol li),
.responsible-gaming-html :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.responsible-gaming-html :deep(b),
.responsible-gaming-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.responsible-gaming-html :deep(a) {
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.responsible-gaming-html :deep(a:hover) {
  opacity: 0.8;
}

.responsible-gaming-content-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.responsible-gaming-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.responsible-gaming-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .responsible-gaming-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .responsible-gaming-container {
    width: 100%;
    max-width: 100%;
  }

  .responsible-gaming-title {
    font-size: 24px;
    line-height: 32px;
  }

  .responsible-gaming-subtitle {
    font-size: 20px;
    line-height: 24px;
  }
}

@media (max-width: 360px) {
  .responsible-gaming-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

