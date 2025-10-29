<template>
  <div class="home-page">
    <section class="home-section">
      <!-- Hero Container -->
      <div class="hero-container">
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
        <h2 class="features-title">Features</h2>
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
      </div>

      <!-- Bonuses Container -->
      <div class="bonuses-container">
        <h2 class="bonuses-title">Bonuses</h2>
        <div class="bonuses-grid">
          <div class="bonus-card bonus-card-1">
            <div class="bonus-content">
              <p class="bonus-label">Welcome 1st Deposit Bonus</p>
              <h3 class="bonus-title">100% up to €300<br/>+ 100 FS + 3 Coins</h3>
              <p class="bonus-text">Start your adventure with 1st Deposit Bonus!</p>
            </div>
          </div>

          <div class="bonus-card bonus-card-2">
            <div class="bonus-content">
              <p class="bonus-label">Loyalty cashback</p>
              <h3 class="bonus-title">Up to 15%</h3>
              <p class="bonus-text">Unlock new titles in the Loyalty Program and boost your weekly cashback!</p>
            </div>
          </div>

          <div class="bonus-card bonus-card-3">
            <div class="bonus-content">
              <p class="bonus-label">Weekly Bonus Wednesday</p>
              <h3 class="bonus-title">35% Bonus up to 150€</h3>
              <p class="bonus-text">Min deposit € 20, Wagering x45</p>
            </div>
          </div>

          <div class="bonus-card bonus-card-4">
            <div class="bonus-content">
              <p class="bonus-label">Weekend Bonus Sunday</p>
              <h3 class="bonus-title">50% Bonus up to 50€<br/>+ 5 Coins</h3>
              <p class="bonus-text">Min deposit € 30, Wagering x45</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

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
  background-image: url('~/assets/images/HeroBg.png');
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
  letter-spacing: 0%;
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
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 4px 0;
}

.login-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  letter-spacing: 0%;
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
  letter-spacing: 0%;
  color: var(--white-white-alpha-64);
}

.login-button {
  margin-top: 0;
  align-self: flex-start;
}

/* Features Section */
.features-container {
  width: 100%;
  margin-top: 80px;
}

.features-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: var(--heading-h1);
  line-height: var(--heading-h1-line-height);
  letter-spacing: 0%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 48px;
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
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
  font-size: var(--heading-h2);
  line-height: var(--heading-h2-line-height);
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 8px 0;
}

.feature-card-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  letter-spacing: 0%;
  color: var(--white-white-alpha-64);
  margin: 0;
}

/* Bonuses Section */
.bonuses-container {
  width: 100%;
  margin-top: 80px;
}

.bonuses-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: var(--heading-h1);
  line-height: var(--heading-h1-line-height);
  letter-spacing: 0%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 48px;
}

.bonuses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.bonus-card {
  width: 632px;
  max-width: 100%;
  height: 300px;
  border-radius: 16px;
  padding: 32px 24px;
  position: relative;
  overflow: hidden;
  background-color: #171821;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.bonus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
}

.bonus-card-1 {
  background-image: url('~/assets/images/bonus1.svg');
}

.bonus-card-2 {
  background-image: url('~/assets/images/bonus2.svg');
}

.bonus-card-3 {
  background-image: url('~/assets/images/bonus3.svg');
}

.bonus-card-4 {
  background-image: url('~/assets/images/bonus4.svg');
}

.bonus-content {
  position: relative;
  z-index: 2;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bonus-label {
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  letter-spacing: 0%;
  color: #FFC107;
  margin: 0;
}

.bonus-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: var(--heading-h3);
  line-height: 32px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.bonus-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: var(--font-size-sm);
  line-height: var(--text-sm-line-height);
  letter-spacing: 0%;
  color: var(--white-white-alpha-64);
  margin: 0;
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

  .bonus-content {
    max-width: 60%;
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
    height: auto;
    min-height: 240px;
  }

  .bonus-content {
    max-width: 70%;
  }

  .bonuses-container {
    margin-top: 60px;
  }
}
</style>

