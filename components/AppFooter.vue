<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Top Section -->
      <div class="footer-top">
        <div class="footer-logo">
          <img :src="logoUrl" :alt="logoAlt" />
        </div>
        
        <nav class="footer-nav">
          <NuxtLink 
            v-for="(item, index) in footerMenu" 
            :key="index" 
            :to="item.permalink" 
            class="footer-link"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>

        <div class="footer-socials">
          <a 
            v-for="(social, index) in socialLinks" 
            :key="index" 
            :href="social.link" 
            class="social-icon" 
            :aria-label="social.logo.title"
          >
            <img :src="social.logo.fullSettings[0]" :alt="social.logo.alt || social.logo.title" />
          </a>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="footer-payments">
        <div 
          v-for="(payment, index) in payments" 
          :key="index" 
          class="payment-icon"
        >
          <img 
            :src="payment.fullSettings[0]" 
            :alt="payment.alt || payment.title" 
          />
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="footer-badges">
        <div 
          v-for="(partner, index) in partners" 
          :key="index"
          class="badge-icon"
        >
          <img 
            :src="partner.logo.fullSettings[0]" 
            :alt="partner.logo.alt || partner.logo.title" 
          />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <div class="footer-age">
          <img src="~/assets/images/footer/18+.webp" alt="18+" />
        </div>
        <div class="footer-text">
          <p>{{ footerText }}</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p>{{ footerSubText }}</p>
        <div class="footer-legal">
          <NuxtLink 
            v-for="(item, index) in termMenu" 
            :key="index" 
            :to="item.permalink" 
            class="legal-link"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import logoDefault from '~/assets/images/footer/SpinEmpire.svg'

// Получаем данные через общий composable (переиспользует кэш между компонентами)
const { data: pageData } = await useMainPageData()

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
const footerMenu = computed(() => pageData.value?.body?.footer_menu || [])
const termMenu = computed(() => pageData.value?.body?.term_menu || [])

// Социальные сети
const socialLinks = computed(() => options.value.social_links || [])

// Платежные методы
const payments = computed(() => options.value.payments || [])

// Партнеры
const partners = computed(() => options.value.partners || [])

// Тексты
const footerText = computed(() => options.value.footer_text || '')
const footerSubText = computed(() => options.value.footer_sub_text || '2025 © SpinEmpire.com. All Rights Reserved')
</script>

<style scoped>
.footer {
  background: var(--surface, #171821);
  opacity: 1;
  padding: var(--spacing-lg) 80px;
  margin-top: 80px;
  border-bottom-width: 1px;
}

.footer-container {
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--gray-gray-6, #262936);
}

.footer-logo img {
  height: 40px;
  width: auto;
}

.footer-nav {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #FFFFFF;
}

.footer-socials {
  display: flex;
  gap: 16px;
  align-items: center;
}

.social-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.social-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.social-icon:hover {
  transform: scale(1.1);
}

.footer-payments {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 20px 0;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray-gray-6, #262936);
}

.payment-icon {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.footer-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 0 20px 0;
}

.badge-icon {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.badge-icon:hover {
  opacity: 0.8;
}

.badge-icon img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.footer-bottom {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.footer-age {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-age img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-text {
  flex: 1;
}

.footer-text p {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.footer-copyright p {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.legal-link {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #FFFFFF;
}

@media (max-width: 1400px) {
  .footer {
    padding: var(--spacing-lg) 40px;
  }
}

@media (max-width: 968px) {
  .footer {
    padding: var(--spacing-lg) 20px;
  }

  .footer-payments {
    gap: 24px;
  }

  .payment-icon {
    height: 32px;
  }

  .badge-icon {
    height: 40px;
  }
}

@media (max-width: 768px) {
  .footer {
    margin-top: 60px;
  }

  .footer-top {
    padding-bottom: 32px;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-logo {
    order: 1;
  }

  .footer-socials {
    order: 2;
  }

  .footer-nav {
    order: 3;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 32px;
    text-align: center;
  }

  .footer-payments {
    gap: 16px;
    padding: 24px 0;
  }

  .payment-icon {
    height: 28px;
  }

  .footer-badges {
    padding: 20px 0 24px 0;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
  }

  .footer-age {
    width: 48px;
    height: 48px;
  }

  .footer-copyright {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding-top: 20px;
  }

  .footer-legal {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .footer-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 16px;
  }

  .footer-top {
    gap: 20px;
  }
}

@media (max-width: 360px) {
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>

