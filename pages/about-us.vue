<template>
  <div class="about-page">
    <section class="about-section">
      <div class="about-container">
        <h1 class="about-title">{{ pageH1 }}</h1>
        
        <!-- Shore Description -->
        <div class="about-shore" v-if="shoreDescription" v-html="shoreDescription"></div>
        
        <!-- Pros Grid -->
        <div class="pros-container" v-if="pros.length > 0">
          <div
            v-for="(pro, index) in pros"
            :key="index"
            class="pro-card"
          >
            <div class="pro-icon">
              <img
                :src="pro.img?.fullSettings?.[0]"
                :alt="pro.img?.alt || pro.title"
              />
            </div>
            <h3 class="pro-title">{{ pro.title }}</h3>
            <p class="pro-description">{{ pro.description }}</p>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="about-content" v-if="pageContent" v-html="pageContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { fetchAboutUsPage } = useWordpressApi()

// Загружаем данные с SSR через useAsyncData
const { data: pageData } = await useAsyncData('aboutUsPage', () => fetchAboutUsPage())

const pageH1 = computed(() => pageData.value?.body?.h1 || 'About Us')
const shoreDescription = computed(() => pageData.value?.body?.shore_description || '')
const pageContent = computed(() => pageData.value?.body?.content || '')
const pros = computed(() => pageData.value?.body?.pros || [])

// SEO метатеги
useHead({
  title: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'About Us - SpinEmpire',
  meta: [
    {
      name: 'description',
      content: pageData.value?.body?.description || 'Learn more about SpinEmpire online casino'
    },
    {
      property: 'og:title',
      content: pageData.value?.body?.meta_title || pageData.value?.body?.title || 'About Us - SpinEmpire'
    },
    {
      property: 'og:description',
      content: pageData.value?.body?.description || 'Learn more about SpinEmpire online casino'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
.about-page {
  background: var(--bg-color);
  min-height: 100vh;
}

.about-section {
  padding: 48px 80px;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: var(--heading-h1);
  line-height: var(--heading-h1-line-height);
  color: var(--menu-link);
  margin: 0 0 32px 0;
  text-align: center;
}

/* Shore Description */
.about-shore {
  margin-bottom: 48px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: var(--primary-radius);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.about-shore :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: var(--menu-link);
  margin: 0 0 16px 0;
}

.about-shore :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: var(--white-white-alpha-64);
  margin: 0;
}

/* Pros Grid */
.pros-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.pro-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--primary-radius);
  padding: 32px 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.pro-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(251, 33, 62, 0.3);
  transform: translateY(-4px);
}

.pro-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: rgba(251, 33, 62, 0.1);
  border-radius: 50%;
  padding: 12px;
}

.pro-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pro-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--font-size-lg);
  line-height: 28px;
  color: var(--menu-link);
  margin: 0 0 12px 0;
}

.pro-description {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  color: var(--white-white-alpha-64);
  margin: 0;
}

/* Main Content */
.about-content {
  margin-top: 48px;
}

.about-content :deep(h2) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  color: var(--menu-link);
  margin: 32px 0 16px 0;
}

.about-content :deep(h2:first-child) {
  margin-top: 0;
}

.about-content :deep(h3) {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: var(--heading-h3-line-height);
  color: var(--menu-link);
  margin: 24px 0 12px 0;
}

.about-content :deep(p) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: var(--white-white-alpha-64);
  margin: 0 0 16px 0;
}

.about-content :deep(ol),
.about-content :deep(ul) {
  margin: 0 0 16px 0;
  padding-left: 24px;
}

.about-content :deep(ol li),
.about-content :deep(ul li) {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: var(--white-white-alpha-64);
  margin-bottom: 8px;
}

.about-content :deep(b),
.about-content :deep(strong) {
  font-weight: 700;
  color: var(--menu-link);
}

.about-content :deep(a) {
  color: var(--primary-bg);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.about-content :deep(a:hover) {
  color: #ff5f72;
}

/* Responsive */
@media (max-width: 1400px) {
  .about-section {
    padding: 40px 40px;
  }
}

@media (max-width: 968px) {
  .about-section {
    padding: 32px 20px;
  }
  
  .pros-container {
    grid-template-columns: 1fr;
  }
  
  .about-title {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 24px 16px;
  }
  
  .about-title {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  
  .about-shore {
    padding: 16px;
    margin-bottom: 32px;
  }
  
  .pros-container {
    gap: 16px;
    margin-bottom: 32px;
  }
  
  .pro-card {
    padding: 24px 16px;
  }
}
</style>
