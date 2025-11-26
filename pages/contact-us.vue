<template>
  <div class="contact-us">
    <section class="contact-section">
      <div class="contact-container">
        <!-- Left Side - Image -->
        <div class="contact-image">
          <img :src="pageImage" :alt="pageH1 || 'Contact Us'" width="500" height="500" loading="lazy" />
        </div>

        <!-- Right Side - Content -->
        <div class="contact-content">
          <h1 class="contact-title">{{ pageH1 }}</h1>
          <div class="contact-html" v-html="pageContent"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContactImage from '~/assets/images/contact.png'

const { fetchContactPage } = useWordpressApi()

// Загружаем данные с SSR через useAsyncData
const { data: pageData } = await useAsyncData('contactPage', () => fetchContactPage())

// Computed для удобного доступа к данным
const pageH1 = computed(() => pageData.value?.body?.h1 || 'Contact Us')
const pageContent = computed(() => pageData.value?.body?.content || '')
const pageImage = computed(() => pageData.value?.body?.thumbnail || ContactImage)

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Contact Us - SpinEmpire',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || 'Contact SpinEmpire casino support team'
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Contact Us - SpinEmpire'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || 'Contact SpinEmpire casino support team'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.contact-us {
  background: var(--bg-color);
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
}

.contact-section {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100%;
}

.contact-container {
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: flex-start;
}

/* Left Side - Image */
.contact-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image img {
  width: 616px;
  height: 432px;
  max-width: 100%;
  object-fit: contain;
}

/* Right Side - Content */
.contact-content {
  flex: 1;
  width: 616px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  margin: 0 0 16px 0;
}

/* Стили для HTML контента из API */
.contact-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.contact-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.contact-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin: 20px 0 8px 0;
}

.contact-html :deep(a) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFCF68;
  text-decoration: underline;
  transition: opacity 0.3s ease;
}

.contact-html :deep(a:hover) {
  opacity: 0.8;
}

.contact-html :deep(b),
.contact-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.contact-description {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  margin: 0 0 32px 0;
}

.contact-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 0 0 8px 0;
}

.contact-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  margin: 0 0 16px 0;
}

.contact-website {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: var(--yellow-yellow-4, #FFCF68);
}

.contact-email {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFCF68;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  transition: opacity 0.3s ease;
}

.contact-email:hover {
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-us {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .contact-section {
    align-items: flex-start;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-image img {
    width: 328px;
    height: 230.02597045898438px;
  }

  .contact-content {
    text-align: center;
    gap: 16px;
  }

  .contact-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }

  .contact-subtitle {
    font-size: 20px;
    line-height: 24px;
  }

  .contact-description {
    margin-bottom: 24px;
  }
}

@media (max-width: 360px) {
  .contact-us {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .contact-content {
    gap: 16px;
  }
}
</style>

