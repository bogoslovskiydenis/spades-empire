<template>
  <div class="privacy-policy">
    <section class="privacy-section">
      <div class="privacy-container">
        <h1 class="privacy-title">{{ pageH1 }}</h1>
        <div class="privacy-html" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Получаем API функции из composable
const { fetchPrivacyPolicyPage } = useWordpressApi()

// Реактивные данные из API
const pageData = ref(null)

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || 'Privacy Policy')
const pageContent = computed(() => pageData.value?.body?.content || '')

// Загружаем данные при монтировании компонента
onMounted(async () => {
  try {
    const data = await fetchPrivacyPolicyPage()
    pageData.value = data
    console.log('Данные страницы Privacy Policy загружены:', data)
  } catch (error) {
    console.error('Не удалось загрузить данные страницы Privacy Policy:', error)
  }
})
</script>

<style scoped>
.privacy-page {
  background: var(--bg-color);
}

.privacy-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.privacy-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.privacy-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Стили для HTML контента из API */
.privacy-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.privacy-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.privacy-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.privacy-html :deep(h4) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 16px 0 8px 0;
}

.privacy-html :deep(ol),
.privacy-html :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.privacy-html :deep(ol li),
.privacy-html :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.privacy-html :deep(b),
.privacy-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.privacy-html :deep(i),
.privacy-html :deep(em) {
  font-style: italic;
}

.privacy-html :deep(a) {
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.privacy-html :deep(a:hover) {
  opacity: 0.8;
}

.privacy-html :deep(br) {
  display: block;
  margin: 8px 0;
  content: "";
}

/* Responsive */
@media (max-width: 768px) {
  .privacy-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .privacy-container {
    width: 100%;
    max-width: 100%;
  }

  .privacy-title {
    font-size: 24px;
    line-height: 32px;
  }
}

@media (max-width: 360px) {
  .privacy-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
