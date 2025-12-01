<template>
  <div class="home-page">
    <section class="home-section">
      <!-- Hero Container -->
      <div class="hero-container">
        <picture class="hero-picture" aria-hidden="true">
          <source
            v-if="heroBannerSources.desktop"
            media="(min-width: 1280px)"
            :srcset="heroBannerSources.desktop"
          />
          <source
            v-if="heroBannerSources.tablet"
            media="(min-width: 768px)"
            :srcset="heroBannerSources.tablet"
          />
          <img
            class="hero-picture-img"
            :src="heroBannerSources.mobile"
            :alt="bannerAlt"
            width="1920"
            height="600"
            loading="eager"
          />
        </picture>
        <div class="hero-content">
          <h1 class="hero-title" v-html="bannerTitle"></h1>
          <p class="hero-description">{{ bannerDescription }}</p>
          <AppButton variant="signup" tag="a" :href="config.public.ref" target="_blank" class="hero-button">SIGN UP</AppButton>
        </div>
      </div>

      <!-- Log in and Registration Container -->
      <div class="login-container" v-if="contentHtml">
        <div class="login-image">
          <img :src="loginThumbnail" :alt="loginThumbnailAlt" width="616" height="616" loading="lazy" />
        </div>
        <div class="login-content" v-html="contentHtml"></div>
      </div>

      <!-- Features Container -->
      <div class="features-container" v-if="features.length > 0">
        <h2 class="features-title">Features</h2>
        <div class="features-description" v-if="featureContent" v-html="featureContent"></div>

        <div class="features-grid">
          <div 
            v-for="(feature, index) in features" 
            :key="index" 
            class="feature-card"
          >
            <div class="feature-icon">
              <img 
                :src="feature.img?.fullSettings?.[0]" 
                :alt="feature.img?.alt || feature.title"
                width="120"
                height="120"
                loading="lazy"
              />
            </div>
            <h3 class="feature-card-title">{{ feature.title }}</h3>
            <p class="feature-card-text">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Bonuses Container -->
      <div class="bonuses-container" v-if="bonuses.length > 0">
        <h2 class="bonuses-title">Bonuses</h2>
        <div class="bonuses-grid">
          <div 
            v-for="(bonus, index) in bonuses" 
            :key="index" 
            class="bonus-card"
          >
            <div class="bonus-content">
                <h3 class="bonus-label">{{ bonus.title }}</h3>
              <p class="bonus-title" v-html="bonus.sub_title"></p>
              <p class="bonus-text">{{ bonus.description }}</p>
            </div>
            <div class="bonus-image">
              <img 
                :src="bonus.img?.fullSettings?.[0]" 
                :alt="bonus.img?.alt || bonus.title"
                width="200"
                height="200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Container -->
      <div class="faq-container" v-if="faqItems.length > 0">
        <h3 class="faq-title">FAQ</h3>
        <div class="faq-list">
          <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="faq-item"
              :class="{ 'is-open': openFaqIndex === index }"
          >
            <button
                class="faq-question"
                @click="toggleFaq(index)"
            >
              <span>{{ item.question }}</span>
              <svg
                  class="faq-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="faq-answer" v-show="openFaqIndex === index">
              <div v-html="item.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import AppButton from '~/components/AppButton.vue'
import heroBg from '~/assets/images/HeroBg.png'
import loginIllustration from '~/assets/images/Image.svg'
import { useResponsiveBanner } from '~/composables/useResponsiveBanner'

// Получаем данные через общий composable (переиспользует кэш между компонентами)
const { data: pageData } = await useMainPageData()
const config = useRuntimeConfig()
const openFaqIndex = ref(0)

// Computed для удобного доступа к данным
const bannerTitle = computed(() => pageData.value?.body?.banner_title || 'SpinEmpire Online Casino')
const bannerDescription = computed(() => pageData.value?.body?.banner_description || '')
const bannerAlt = computed(() => pageData.value?.body?.banner_img?.alt || 'SpinEmpire banner')
const { sources: heroBannerSources, defaultSrc: heroBannerDefault } = useResponsiveBanner(() => ({
  desktopBlock: pageData.value?.body?.banner_img,
  laptopBlock: pageData.value?.body?.banner_laptop_img,
  mobileBlock: pageData.value?.body?.banner_mobile_img,
  fallback: heroBg
}))
const contentHtml = computed(() => pageData.value?.body?.content || '')
const loginThumbnail = computed(() => pageData.value?.body?.thumbnail || loginIllustration)
const loginThumbnailAlt = computed(() => pageData.value?.body?.thumbnail_alt || 'SpinEmpire')
const featureContent = computed(() => pageData.value?.body?.feature_content || '')
const features = computed(() => pageData.value?.body?.features || [])
const bonuses = computed(() => pageData.value?.body?.bonuses || [])
const faqItems = computed(() => {
  const faqData = pageData.value?.body?.faq || []
  return faqData.map(item => ({
    question: item.value_1,
    answer: item.value_2
  }))
})

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'SpinEmpire Online Casino',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || 'Best online casino with great bonuses and fast payouts'
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'SpinEmpire Online Casino'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || 'Best online casino with great bonuses and fast payouts'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Функция для обновления ссылок в динамическом контенте
const updateDynamicLinks = () => {
  if (process.client) {
    nextTick(() => {
      // Обновляем все кнопки Log In (ref_btn)
      const loginButtons = document.querySelectorAll('.ref_btn')
      loginButtons.forEach(button => {
        button.setAttribute('href', 'https://spinempire.sbs/dboyt377c')
        button.setAttribute('target', '_blank')
      })
    })
  }
}

// Обновляем ссылки на клиенте после монтирования
onMounted(() => {
  updateDynamicLinks()
})

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<style scoped>
.home-page {
  background: var(--bg-color);
}

.home-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
}

.hero-container {
  width: 100%;
  min-height: 400px;
  border-radius: 16px;
  padding: var(--spacing-3xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-picture-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-content {
  max-width: 520px;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h1);
  line-height: var(--heading-h1-line-height);
  color: var(--menu-link);
  margin-bottom: 24px;
}

.hero-description {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: var(--white-white-alpha-64);
  margin-bottom: 32px;
}

.hero-button {
  width: 240px;
  height: 48px;
  padding: var(--spacing-md) var(--spacing-lg);
  gap: 8px;
  border-radius: var(--primary-radius);
  border-width: 1px;
}

@media (max-width: 1400px) {
  .home-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

/* Login Section */
.login-container {
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: flex-start;
  margin-top: 48px;
  justify-content: center;
}

.login-image {
  flex: 1;
  max-width: 616px;
  aspect-ratio: 1 / 1;
}

.login-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.login-content {
  flex: 1;
  max-width: 616px;
  display: flex;
  flex-direction: column;
}

/* Стили для HTML контента из API */
.login-content :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin-bottom: 16px;
}

.login-content :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: #FFFFFF;
  margin: 0 0 4px 0;
}

.login-content :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 4px 0;
}

.login-content :deep(ol) {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 32px 0;
}

.login-content :deep(ol li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
}

.login-content :deep(.ref_btn) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 48px;
  padding: 0;
  border-radius: var(--primary-radius);
  background: var(--primary-bg, #FB213E);
  border: 1px solid transparent;
  background-image:
      linear-gradient(var(--primary-bg, #FB213E), var(--primary-bg, #FB213E)),
      linear-gradient(180deg, rgba(255, 120, 127, 0) 0%, #FF787F 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0px 4px 16.6px 0px rgba(251, 33, 62, 0.32);
  text-align: center;
  text-decoration: none;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-md);
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.login-content :deep(.ref_btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0px 6px 20px 0px rgba(251, 33, 62, 0.4);
}

.login-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin-bottom: 16px;
}

.login-block {
  display: flex;
  flex-direction: column;
}

.login-block:not(:last-of-type) {
  margin-bottom: 4px;
}

.login-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: #FFFFFF;
  margin: 0 0 4px 0;
}

.login-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 0 4px 0;
}

.login-list {
  list-style-position: outside;
  padding-left: 20px;
  margin: 0 0 32px 0;
}

.login-list li {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
}

.login-button {
  width: 240px;
  height: 48px;
  padding: var(--spacing-md) var(--spacing-lg);
  gap: 8px;
  border-radius: var(--primary-radius);
  background: var(--primary-bg, #FB213E);
  border: 1px solid transparent;
  background-image:
      linear-gradient(var(--primary-bg, #FB213E), var(--primary-bg, #FB213E)),
      linear-gradient(180deg, rgba(255, 120, 127, 0) 0%, #FF787F 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0px 4px 16.6px 0px rgba(251, 33, 62, 0.32);
  margin-top: 0;
  align-self: flex-start;
  transition: all 0.3s ease;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 20px 0px rgba(251, 33, 62, 0.4);
}

/* Features Section */
.features-container {
  width: 100%;
  margin-top: 80px;
}

.features-title {
  text-align: center;
  margin-bottom: 16px;
    font-size: var(--heading-h1);
    line-height: var(--heading-h1-line-height);
}

.features-grid {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.feature-card {
  width: calc(25% - 16px);
  max-width: 308px;
  background: #171821;
  border-radius: 16px;
  padding: 24px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
}

.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 16px;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-card-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin: 0 0 8px 0;
}

.feature-card-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0;
}

.features-description {
  margin-bottom: 48px;
  text-align: center;
}

.features-description :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: #FFFFFF;
  margin-bottom: 8px;
}

.features-description :deep(span),
.features-description :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0 auto;
  max-width: 100%;
}

.features-description-title {
  margin-bottom: 8px;
  color: #FFFFFF;
}

.features-description-text {
  color: var(--white-white-alpha-64);
  margin: 0 auto;
  max-width: 100%;
  margin-bottom: 48px;
}

/* Bonuses Section */
.bonuses-container {
  width: 100%;
  margin-top: 80px;
}

.bonuses-title {
  text-align: center;
  margin-bottom: 48px;
    font-size: var(--heading-h1);
    line-height: var(--heading-h1-line-height);
}

.bonuses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.bonus-card {
  width: calc(50% - 8px);
  max-width: 632px;
  height: 300px;
  border-radius: 16px;
  padding: 32px 24px;
  position: relative;
  overflow: hidden;
  background-color: #171821;
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.bonus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
}

.bonus-content {
  position: relative;
  z-index: 2;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bonus-image {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.bonus-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 240px;
}

.bonus-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFC107;
  margin: 0;
}

.bonus-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 0;
}

.bonus-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0;
}

/* FAQ Section */
.faq-container {
  width: 100%;
  margin-top: 64px;
}

.faq-title {
  text-align: center;
  margin-bottom: 32px;
    font-size: var(--heading-h1);
    line-height: var(--heading-h1-line-height);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1280px;
  margin: 0 auto;
}

.faq-item {
  background: #171821;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: left;
  transition: all 0.3s ease;
}

.faq-question:hover {
  opacity: 0.8;
}

.faq-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: #FFFFFF;
}

.faq-item.is-open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 32px 24px 32px;
  animation: fadeIn 0.3s ease;
}

.faq-answer :deep(p),
.faq-answer :deep(div) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0;
}

.faq-answer :deep(b),
.faq-answer :deep(strong) {
  font-weight: 700;
  color: #FFFFFF;
}

.faq-answer p {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1400px) {
  .login-container {
    gap: 60px;
  }
}
@media (max-width: 1200px) {
    .features-grid {
        flex-wrap: wrap;
    }
}

@media (max-width: 968px) {
  .login-container {
    flex-direction: column;
    gap: 40px;
  }

  .login-image {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .bonus-card {
    flex-direction: column-reverse;
  }

  .bonus-content {
    max-width: 100%;
  }

  .bonus-image {
    position: relative;
    width: 100%;
    height: auto;
    transform: none;
    top: auto;
  }

  .bonus-image img {
    max-height: 200px;
  }
}

@media (max-width: 768px) {
  .home-section {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-container {
    height: auto;
    min-height: 400px;
    padding: 32px 24px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 32px;
    line-height: 40px;
  }

  .hero-description {
    font-size: 14px;
    line-height: 20px;
  }

  .features-container {
    margin-top: 60px;
  }

  .bonus-card {
    width: calc(50% - 12px);
    height: auto;
    min-height: 240px;
    flex-direction: column-reverse;
  }

  .bonus-content {
    max-width: 100%;
  }

  .bonus-label {
    font-size: 16px;
    line-height: 24px;
  }

  .bonus-image {
    position: relative;
    width: 100%;
    height: auto;
    transform: none;
    top: auto;
  }

  .bonus-image img {
    max-height: 200px;
  }

  .bonuses-container {
    margin-top: 60px;
  }

  .faq-container {
    margin-top: 48px;
  }

  .faq-question {
    padding: 20px 24px;
    font-size: 14px;
    line-height: 20px;
  }

  .faq-answer {
    padding: 0 24px 20px 24px;
  }
    .feature-card {
        width: calc(50% - 16px);
    }
    .bonus-card {
        width: 100%;
    }
}

@media (max-width: 480px) {
  .bonus-card {
    width: 100%;
  }
    .feature-card {
        width: 100%;
    }
    .bonus-card {
        width: 100%;
    }
}
</style>