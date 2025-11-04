<template>
  <div class="about-page">
    <section class="about-section">
      <div class="about-container">
        <h1 class="about-title">About SpinEmpire</h1>

        <!-- First Text Section -->
        <div class="about-content-block">
          <h2 class="about-subtitle">Lorem ipsum dolor</h2>
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Feature Cards -->
        <div class="about-cards">
          <div class="about-card">
            <img src="~/assets/images/about/Time.svg" alt="Fast payouts" class="about-card-icon" />
            <h3 class="about-card-title">Fast payouts</h3>
            <p class="about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="about-card">
            <img src="~/assets/images/about/Chat.svg" alt="Best support service" class="about-card-icon" />
            <h3 class="about-card-title">Best support service</h3>
            <p class="about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="about-card">
            <img src="~/assets/images/about/Gift.svg" alt="Bonuses" class="about-card-icon" />
            <h3 class="about-card-title">Bonuses</h3>
            <p class="about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- General rules Section -->
        <div class="about-content-block">
          <h2 class="about-subtitle">General rules</h2>
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.
          </p>
        </div>

        <!-- Data collection Section -->
        <div class="about-content-block">
          <h2 class="about-subtitle">Data collection</h2>
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.about-page {
  background: var(--bg-color);
}

.about-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.about-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.about-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.about-content-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.about-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

/* Cards */
.about-cards {
  width: 800px;
  max-width: 100%;
  display: flex;
  gap: 16px;
}

.about-card {
  padding: var(--spacing-lg) 24px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--surface, #171821);
}

.about-card-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.about-card-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 24px 0 8px 0;
}

.about-card-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .about-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .about-container {
    width: 100%;
    max-width: 100%;
  }

  .about-title {
    font-size: 24px;
    line-height: 32px;
  }

  .about-subtitle {
    font-size: 20px;
    line-height: 24px;
  }

  .about-cards {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .about-card {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .about-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

