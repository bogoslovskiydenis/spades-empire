<template>
  <div class="bonuses-page">
    <section class="bonuses-page-section">
      <!-- Banner Container -->
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="banner-title">Bonuses</h1>
          <p class="banner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <AppButton variant="signup" class="banner-button">Sign Up</AppButton>
        </div>
      </div>

      <!-- Content Container -->
      <div class="content-container">
        <!-- Section 1 -->
        <div class="content-section">
          <h2 class="content-title">Lorem ipsum dolor sit amet</h2>
          
          <div class="content-block">
            <h3 class="content-subtitle">Lorem ipsum dolor sit amet</h3>
            <p class="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
              laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="content-block">
            <h3 class="content-subtitle">Duis aute irure</h3>
            <p class="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="content-block">
            <h3 class="content-subtitle">Lorem ipsum dolor sit amet</h3>
            <p class="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
              laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="content-block">
            <h3 class="content-subtitle">Est laborum</h3>
            <p class="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bonuses-page {
  background: var(--bg-color);
}

.bonuses-page-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
}

/* Banner Section */
.banner-container {
  width: 100%;
  border-radius: 16px;
  padding: var(--spacing-3xl);
  background-image: url('~/assets/images/BonusPageBaner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 400px;
}

.banner-content {
  width: 1280px;
  max-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
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
  margin-bottom: 156px;
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
  .bonuses-page-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 968px) {
  .bonuses-page-section {
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
  .bonuses-page-section {
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

