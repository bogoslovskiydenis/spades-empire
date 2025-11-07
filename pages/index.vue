<template>
  <div class="home-page">
    <section class="home-section">
      <!-- Hero Container -->
      <div class="hero-container" :style="{ backgroundImage: `url(${heroBg})` }">
        <div class="hero-content">
          <h1 class="hero-title">
            SpinEmpire<br />
            Online Casino
          </h1>
          <p class="hero-description">
            SpinEmpire is a modern online platform offering a wide range of casino games. With a strong focus on user experience, SpinEmpire caters to both novice and experienced players, providing a comfortable environment with plenty of opportunities to win.
          </p>
          <AppButton variant="signup" class="hero-button">Play now</AppButton>
        </div>
      </div>

      <!-- Log in and Registration Container -->
      <div class="login-container">
        <div class="login-image">
          <img src="~/assets/images/Image.svg" alt="SpinEmpire" />
        </div>
        <div class="login-content">
          <h2 class="login-title">SpinEmpire Log in and registration</h2>

          <div class="login-block">
            <h3 class="login-subtitle">SpinEmpire Registration</h3>
            <p class="login-text">Registering at SpinEmpire is quick and easy. To create an account:</p>
            <ol class="login-list">
              <li>Go to the official SpinEmpire website.</li>
              <li>Click on the "Sign Up" button at the top right of the homepage.</li>
              <li>Fill out the registration form with your email, password, and preferred account currency.</li>
              <li>Confirm that you are over 18 years old and agree to the terms and conditions.</li>
              <li>Click "Complete" to complete the process.</li>
              <li>Verify your email by clicking the link sent to your inbox.</li>
            </ol>
          </div>

          <div class="login-block">
            <h3 class="login-subtitle">SpinEmpire Log In</h3>
            <p class="login-text">SpinEmpire login is simple and convenient. To log in, just follow these steps:</p>
            <ol class="login-list">
              <li>Visit the official SpinEmpire website.</li>
              <li>Click on the "Log in" button at the top right of the homepage.</li>
              <li>Enter your registered email and password.</li>
              <li>Click "Log in" to access your account.</li>
            </ol>
          </div>

          <AppButton variant="signup" class="login-button">Log In</AppButton>
        </div>
      </div>

      <!-- Features Container -->
      <div class="features-container">
        <div class="features-description">
          <h1 class="features-title">Features</h1>

          <p class="features-description-text text-sm">We built this platform on four core principles our team believes in. This is what you can expect every time you play..</p>

        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="~/assets/images/cup.svg" alt="Cup" />
            </div>
            <h3 class="feature-card-title">Lorem ipsum</h3>
            <p class="feature-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="~/assets/images/Ticket.svg" alt="Ticket" />
            </div>
            <h3 class="feature-card-title">consectetur adipiscing elit sed do eiusmod</h3>
            <p class="feature-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="~/assets/images/NChest.svg" alt="Chest" />
            </div>
            <h3 class="feature-card-title">Sed do eiusmod tempor</h3>
            <p class="feature-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="~/assets/images/NShield.svg" alt="Shield" />
            </div>
            <h3 class="feature-card-title">Incididunt ut labore et dolore magna aliqua.</h3>
            <p class="feature-card-text">Start your adventure with 1st Deposit Bonus!</p>
          </div>
        </div>

        <!-- Features Description -->

      </div>

      <!-- Bonuses Container -->
      <div class="bonuses-container">
        <h1 class="bonuses-title">Bonuses</h1>
        <div class="bonuses-grid">
          <div class="bonus-card">
            <div class="bonus-content">
              <p class="bonus-label">Welcome 1st Deposit Bonus</p>
              <h3 class="bonus-title">100% up to €300<br/>+ 100 FS + 3 Coins</h3>
              <p class="bonus-text">Start your adventure with 1st Deposit Bonus!</p>
            </div>
            <div class="bonus-image">
              <img src="~/assets/images/bonus1.png" alt="Welcome Bonus" />
            </div>
          </div>

          <div class="bonus-card">
            <div class="bonus-content">
              <p class="bonus-label">Loyalty cashback</p>
              <h3 class="bonus-title">Up to 15%</h3>
              <p class="bonus-text">Unlock new titles in the Loyalty Program and boost your weekly cashback!</p>
            </div>
            <div class="bonus-image">
              <img src="~/assets/images/bonus2.png" alt="Loyalty cashback" />
            </div>
          </div>

          <div class="bonus-card">
            <div class="bonus-content">
              <p class="bonus-label">Weekly Bonus Wednesday</p>
              <h3 class="bonus-title">35% Bonus up to 150€</h3>
              <p class="bonus-text">Min deposit € 20, Wagering x45</p>
            </div>
            <div class="bonus-image">
              <img src="~/assets/images/bonus3.png" alt="Weekly Bonus" />
            </div>
          </div>

          <div class="bonus-card">
            <div class="bonus-content">
              <p class="bonus-label">Weekend Bonus Sunday</p>
              <h3 class="bonus-title">50% Bonus up to 50€<br/>+ 5 Coins</h3>
              <p class="bonus-text">Min deposit € 30, Wagering x45</p>
            </div>
            <div class="bonus-image">
              <img src="~/assets/images/bonus4.png" alt="Weekend Bonus" />
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Container -->
      <div class="faq-container">
        <h1 class="faq-title">FAQ</h1>
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
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppButton from '~/components/AppButton.vue'
import heroBg from '~/assets/images/HeroBg.png'

// Получаем API функции из composable
const { fetchMainPage } = useWordpressApi()

// Загружаем данные при монтировании компонента для проверки через консоль
onMounted(async () => {
  try {
    const data = await fetchMainPage()
    console.log('=== Данные из WordPress API ===')
    console.log('Полный ответ:', data)
    console.log('=== Структура body ===')
    console.log('Banner Title:', data?.body?.banner_title)
    console.log('Banner Description:', data?.body?.banner_description)
    console.log('Features:', data?.body?.features)
    console.log('Bonuses:', data?.body?.bonuses)
    console.log('FAQ:', data?.body?.faq)
  } catch (error) {
    console.error('Не удалось загрузить данные:', error)
  }
})

const openFaqIndex = ref(0)

const faqItems = ref([
  {
    question: 'Lorem ipsum dolor sit',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Ut enim ad minim veniam',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: 'Excepteur sint occaecat',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: 'Duis aute irure dolor',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: 'Ut enim ad minim veniam',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: 'Excepteur sint occaecat',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
])

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
  border-radius: 16px;
  padding: var(--spacing-3xl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 520px;
  z-index: 2;
}

.hero-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
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
}

.login-image img {
  width: 100%;
  height: auto;
  display: block;
}

.login-content {
  flex: 1;
  max-width: 616px;
  display: flex;
  flex-direction: column;
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
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.feature-card {
  width: 100%;
  max-width: 308px;
  height: 324px;
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
  margin-top: 24px;
  text-align: center;
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
}

.bonuses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.bonus-card {
  width: 100%;
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

  .bonus-title {
    font-size: 20px;
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
}

@media (max-width: 480px) {
  .bonus-card {
    width: 100%;
  }
}
</style>