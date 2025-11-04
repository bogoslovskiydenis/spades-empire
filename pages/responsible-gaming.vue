<template>
  <div class="responsible-gaming-page">
    <section class="responsible-gaming-section">
      <div class="responsible-gaming-container">
        <h1 class="responsible-gaming-title">Responsible gaming</h1>

        <!-- First Section -->
        <div class="responsible-gaming-content-block">
          <h2 class="responsible-gaming-subtitle">Lorem ipsum dolor sit amet</h2>
          <p class="responsible-gaming-text">
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

        <!-- Second Section -->
        <div class="responsible-gaming-content-block">
          <h2 class="responsible-gaming-subtitle">Duis aute irure</h2>
          <p class="responsible-gaming-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Third Section -->
        <div class="responsible-gaming-content-block">
          <h2 class="responsible-gaming-subtitle">Lorem ipsum dolor sit amet</h2>
          <p class="responsible-gaming-text">
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

        <!-- Fourth Section -->
        <div class="responsible-gaming-content-block">
          <h2 class="responsible-gaming-subtitle">Est laborum</h2>
          <p class="responsible-gaming-text">
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
.responsible-gaming-page {
  background: var(--bg-color);
}

.responsible-gaming-section {
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
}

.responsible-gaming-container {
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.responsible-gaming-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.responsible-gaming-content-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.responsible-gaming-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0;
}

.responsible-gaming-text {
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
  .responsible-gaming-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .responsible-gaming-container {
    width: 100%;
    max-width: 100%;
  }

  .responsible-gaming-title {
    font-size: 24px;
    line-height: 32px;
  }

  .responsible-gaming-subtitle {
    font-size: 20px;
    line-height: 24px;
  }
}

@media (max-width: 360px) {
  .responsible-gaming-section {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

