<template>
  <div class="contact-page">
    <section class="contact-section">
      <div class="contact-container">
        <!-- Left Side - Image -->
        <div class="contact-image">
          <img src="~/assets/images/contact.png" alt="Contact Us" />
        </div>

        <!-- Right Side - Content -->
        <div class="contact-content">
          <h1 class="contact-title">Contact Us</h1>
          <p class="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>

          <h2 class="contact-subtitle">General Queries at SpinEmpire</h2>
          <p class="contact-text">For general questions or help with our <span class="contact-website">website</span>, you can email us at:</p>
          <a href="mailto:team@spadespartners.com" class="contact-email">team@spadespartners.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contact-page {
  background: var(--bg-color);
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-left: 80px;
  padding-right: 80px;
}

.contact-section {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100%;
}

.contact-container {
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: flex-start;
}

/* Left Side - Image */
.contact-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image img {
  width: 616px;
  height: 432px;
  max-width: 100%;
  object-fit: contain;
}

/* Right Side - Content */
.contact-content {
  flex: 1;
  width: 616px;
  max-width: 100%;
  height: 248px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 16px 0;
}

.contact-description {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0 0 32px 0;
}

.contact-subtitle {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #FFFFFF;
  margin: 0 0 8px 0;
}

.contact-text {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 0.64);
  margin: 0 0 16px 0;
}

.contact-website {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: var(--yellow-yellow-4, #FFCF68);
}

.contact-email {
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #FFCF68;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  transition: opacity 0.3s ease;
}

.contact-email:hover {
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-page {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .contact-section {
    align-items: flex-start;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-image img {
    width: 328px;
    height: 230.02597045898438px;
  }

  .contact-content {
    text-align: center;
    gap: 16px;
  }

  .contact-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }

  .contact-subtitle {
    font-size: 20px;
    line-height: 24px;
  }

  .contact-description {
    margin-bottom: 24px;
  }
}

@media (max-width: 360px) {
  .contact-page {
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .contact-content {
    gap: 16px;
  }
}
</style>

