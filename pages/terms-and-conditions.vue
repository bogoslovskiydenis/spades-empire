<template>
  <div class="terms-page">
    <section class="terms-section">
      <div class="terms-container">
        <h1 class="terms-title">{{ pageH1 }}</h1>
        <div class="terms-html" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Получаем API функции из composable
const { fetchTermsConditionsPage } = useWordpressApi()

// Реактивные данные из API
const pageData = ref(null)

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || 'Terms & Conditions')
const pageContent = computed(() => pageData.value?.body?.content || '')

// Загружаем данные при монтировании компонента
onMounted(async () => {
  try {
    const data = await fetchTermsConditionsPage()
    pageData.value = data
    console.log('Данные страницы Terms & Conditions загружены:', data)
  } catch (error) {
    console.error('Не удалось загрузить данные страницы Terms & Conditions:', error)
  }
})
</script>

<style scoped>
.terms-page {
  background: var(--bg-color);
}

.terms-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.terms-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.terms-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Стили для HTML контента из API */
.terms-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.terms-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.terms-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.terms-html :deep(h4) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 16px 0 8px 0;
}

.terms-html :deep(ol),
.terms-html :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.terms-html :deep(ol li),
.terms-html :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.terms-html :deep(b),
.terms-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.terms-html :deep(i),
.terms-html :deep(em) {
  font-style: italic;
}

.terms-html :deep(a) {
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.terms-html :deep(a:hover) {
  opacity: 0.8;
}

.terms-html :deep(br) {
  display: block;
  margin: 8px 0;
  content: "";
}

/* Responsive */
@media (max-width: 768px) {
  .terms-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .terms-container {
    width: 100%;
    max-width: 100%;
  }

  .terms-title {
    font-size: 24px;
    line-height: 32px;
  }
}

@media (max-width: 360px) {
  .terms-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
