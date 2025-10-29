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
  height: 516.87px;
  display: flex;
  gap: 48px;
  align-items: flex-start;
  margin-top: 48px;
}

.login-image {
  flex-shrink: 0;
  width: 50%;
  height: 516.87px;
}

.login-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.login-content {
  width: 50%;
  height: 448px;
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

@media (max-width: 1400px) {
  .login-container {
    gap: 60px;
  }
  
  .login-image {
    width: 350px;
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
}
</style>

