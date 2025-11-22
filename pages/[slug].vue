<template>
  <div class="dynamic-page">
    <section class="dynamic-section">
      <div class="dynamic-container">
        <h1 class="dynamic-title">{{ pageH1 }}</h1>
        <div class="dynamic-html" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const { fetchPageBySlug } = useWordpressApi()

const slug = computed(() => route.params.slug as string)

// Загружаем данные страницы через API
// Если страница успешно загружается, значит она существует и её можно показать
const { data: pageData, error: pageError } = await useAsyncData(
  `page-${slug.value}`,
  () => fetchPageBySlug(slug.value),
  {
    // Если страница не найдена, вернется ошибка
    // В этом случае показываем 404
    transform: (data) => {
      if (data && data.confirm === 'ok') {
        return data
      }
      return null
    }
  }
)

// Если страница не загрузилась или вернула ошибку, показываем 404
if (pageError.value || !pageData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || slug.value)
const pageContent = computed(() => pageData.value?.body?.content || '')

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || `${slug.value} - SpinEmpire`,
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || `SpinEmpire casino ${slug.value}`
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || `${slug.value} - SpinEmpire`
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || `SpinEmpire casino ${slug.value}`
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
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 24px 0;
}

/* Стили для HTML контента из API */
.dynamic-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.dynamic-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.dynamic-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.dynamic-html :deep(h4) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 16px 0 8px 0;
}

.dynamic-html :deep(ol),
.dynamic-html :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.dynamic-html :deep(ol li),
.dynamic-html :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.dynamic-html :deep(b),
.dynamic-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.dynamic-html :deep(i),
.dynamic-html :deep(em) {
  font-style: italic;
}

.dynamic-html :deep(a) {
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.dynamic-html :deep(a:hover) {
  opacity: 0.8;
}

.dynamic-html :deep(br) {
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
}

@media (max-width: 360px) {
  .dynamic-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

