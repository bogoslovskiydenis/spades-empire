<template>
  <div class="casino-page">
    <section class="casino-page-section">
      <!-- Banner Container -->
      <div class="banner-container">
        <picture class="banner-picture" aria-hidden="true">
          <source
            v-if="bannerSources.desktop"
            media="(min-width: 1280px)"
            :srcset="bannerSources.desktop"
          />
          <source
            v-if="bannerSources.tablet"
            media="(min-width: 768px)"
            :srcset="bannerSources.tablet"
          />
          <img
            class="banner-picture-img"
            :src="bannerSources.mobile"
            :alt="bannerAlt"
            loading="lazy"
          />
        </picture>
        <div class="banner-content">
          <h1 class="banner-title" v-html="bannerTitle"></h1>
          <p class="banner-description" v-if="bannerDescription">{{ bannerDescription }}</p>
          <AppButton variant="signup" tag="a" :href="config.public.ref" class="banner-button">SIGN UP</AppButton>
        </div>
      </div>

      <!-- Content Container -->
      <div class="content-container" v-if="pageContent">
        <div class="content-section">
          <div class="content-html" v-html="pageContent"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CasinoPageBanner from '~/assets/images/CasinoPageBanner.png'
import { useResponsiveBanner } from '~/composables/useResponsiveBanner'

const { fetchCasinoPage } = useWordpressApi()

// Загружаем данные с SSR через useAsyncData
const { data: pageData } = await useAsyncData('casinoPage', () => fetchCasinoPage())
const config = useRuntimeConfig()
// Computed для удобного доступа к данным
const bannerTitle = computed(() => pageData.value?.body?.banner_title || 'Casino')
const bannerDescription = computed(() => pageData.value?.body?.banner_description || '')
const bannerAlt = computed(() => pageData.value?.body?.banner_img?.alt || bannerTitle.value)
const { sources: bannerSources, defaultSrc: bannerDefault } = useResponsiveBanner(() => ({
  desktopBlock: pageData.value?.body?.banner_img,
  laptopBlock: pageData.value?.body?.banner_laptop_img,
  mobileBlock: pageData.value?.body?.banner_mobile_img,
  fallback: CasinoPageBanner
}))
const pageContent = computed(() => pageData.value?.body?.content || '')

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Casino - SpinEmpire',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || 'Play best casino games at SpinEmpire online casino'
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'Casino - SpinEmpire'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || 'Play best casino games at SpinEmpire online casino'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.casino-page {
  background: var(--bg-color);
}

.casino-page-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
}

/* Banner Section */
.banner-container {
  width: 100%;
  border-radius: 16px;
  padding: var(--spacing-3xl);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.banner-picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-picture-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-content {
  width: 1280px;
  max-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  position: relative;
  z-index: 2;
}

.banner-title {
  color: #FFFFFF;
  margin-bottom: 12px;
}

.banner-description {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
  flex-grow: 1;
}

.banner-button {
  width: 176px;
  height: 48px;
}

/* Content Section */
.content-container {
  width: 100%;
  margin-top: 48px;
}

.content-section {
  max-width: 1280px;
  margin: 0 auto;
}

/* Стили для HTML контента из API */
.content-html :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin: 0 0 16px 0;
}

.content-html :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.content-html :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.content-html :deep(ol),
.content-html :deep(ul) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.content-html :deep(ol li),
.content-html :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin-bottom: 4px;
}

.content-html :deep(b),
.content-html :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.content-title {
  color: #FFFFFF;
  margin-bottom: 16px;
  text-align: left;
}

.content-block {
  margin-bottom: 16px;
}

.content-block:last-child {
  margin-bottom: 0;
}

.content-subtitle {
  color: #FFFFFF;
  margin-bottom: 8px;
}

.content-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

/* Responsive */
@media (max-width: 1400px) {
  .casino-page-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 968px) {
  .casino-page-section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .banner-container {
    min-height: 300px;
    padding: 32px 24px;
  }

  .banner-content {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .casino-page-section {
    padding-top: 40px;
  }

  .banner-container {
    min-height: 250px;
    padding: 24px 20px;
  }

  .banner-content {
    width: 100%;
    height: auto;
  }

  .banner-title {
    margin-bottom: 12px;
  }

  .banner-description {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .banner-button {
    width: 100%;
    max-width: 176px;
  }

  .content-container {
    margin-top: 40px;
  }

  .content-title {
    margin-bottom: 24px;
  }

}
</style>


