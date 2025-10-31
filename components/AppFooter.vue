<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Top Section -->
      <div class="footer-top">
        <div class="footer-logo">
          <img src="~/assets/images/footer/SpinEmpire.svg" alt="SpinEmpire" />
        </div>
        
        <nav class="footer-nav">
          <NuxtLink to="/" class="footer-link">Home</NuxtLink>
          <NuxtLink to="/casino" class="footer-link">Casino</NuxtLink>
          <NuxtLink to="/bonuses" class="footer-link">Bonuses</NuxtLink>
          <NuxtLink to="/contact" class="footer-link">Contact us</NuxtLink>
          <NuxtLink to="/about" class="footer-link">About us</NuxtLink>
          <NuxtLink to="/responsible-gaming" class="footer-link">Responsible gaming</NuxtLink>
        </nav>

        <div class="footer-socials">
          <a href="#" class="social-icon" aria-label="Telegram">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#0088cc"/>
              <path d="M22.987 9.529c.168-.77-.565-1.362-1.227-1.042l-16.8 8.1c-.648.312-.644 1.267.006 1.574l4.145 1.959 9.595-6.03c.358-.225.743.255.415.52l-7.77 6.253v3.09c0 .844 1.06 1.234 1.628.6l2.262-2.526 4.432 2.094c.58.274 1.267-.108 1.378-.77l2.936-13.822z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#instagram-gradient)"/>
              <defs>
                <linearGradient id="instagram-gradient" x1="8" y1="24" x2="24" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FD5"/>
                  <stop offset=".5" stop-color="#FF543E"/>
                  <stop offset="1" stop-color="#C837AB"/>
                </linearGradient>
              </defs>
              <path d="M16 11.2c2.65 0 4.8 2.15 4.8 4.8s-2.15 4.8-4.8 4.8-4.8-2.15-4.8-4.8 2.15-4.8 4.8-4.8zm0 7.92c1.72 0 3.12-1.4 3.12-3.12s-1.4-3.12-3.12-3.12-3.12 1.4-3.12 3.12 1.4 3.12 3.12 3.12zM21.2 11c0 .6-.48 1.08-1.08 1.08s-1.08-.48-1.08-1.08.48-1.08 1.08-1.08 1.08.48 1.08 1.08zM16 8.4c-2.1 0-6.6-.17-8.5.73-.52.24-.93.56-1.35 1.35-.9 1.9-.73 6.4-.73 8.5s-.17 6.6.73 8.5c.24.52.56.93 1.35 1.35 1.9.9 6.4.73 8.5.73s6.6.17 8.5-.73c.52-.24.93-.56 1.35-1.35.9-1.9.73-6.4.73-8.5s.17-6.6-.73-8.5c-.24-.52-.56-.93-1.35-1.35-1.9-.9-6.4-.73-8.5-.73zm0 15.36c-2.1 0-4.16.1-5.68-.52-.76-.3-1.36-.9-1.66-1.66-.62-1.52-.52-3.58-.52-5.68s-.1-4.16.52-5.68c.3-.76.9-1.36 1.66-1.66 1.52-.62 3.58-.52 5.68-.52s4.16-.1 5.68.52c.76.3 1.36.9 1.66 1.66.62 1.52.52 3.58.52 5.68s.1 4.16-.52 5.68c-.3.76-.9 1.36-1.66 1.66-1.52.62-3.58.52-5.68.52z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="social-icon" aria-label="Facebook">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#1877F2"/>
              <path d="M18.5 17.5l.5-3.5h-3.5V11.5c0-1 .5-2 2-2h1.5V6.5s-1.4-.3-2.7-.3c-2.8 0-4.6 1.7-4.6 4.8V14H8.5v3.5h3.2V26h4v-8.5h3z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="social-icon" aria-label="Language">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white"/>
              <mask id="uk-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="white"/>
              </mask>
              <g mask="url(#uk-mask)">
                <path d="M0 0h32v32H0z" fill="#012169"/>
                <path d="M32 0v3.2L19.2 16 32 28.8V32h-3.2L16 19.2 3.2 32H0v-3.2L12.8 16 0 3.2V0h3.2L16 12.8 28.8 0H32z" fill="white"/>
                <path d="M32 0v1.6L18.4 16 32 30.4V32h-1.6L16 17.6 1.6 32H0v-1.6L13.6 16 0 1.6V0h1.6L16 14.4 30.4 0H32z" fill="#C8102E"/>
                <path d="M13.6 0v32h4.8V0h-4.8zM0 10.4v11.2h32V10.4H0z" fill="white"/>
                <path d="M0 12.8v6.4h32v-6.4H0zM15.2 0v32h1.6V0h-1.6z" fill="#C8102E"/>
              </g>
            </svg>
          </a>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="footer-payments">
        <div class="payment-icon">
          <img src="~/assets/images/footer/BankTransfer.svg" alt="Bank Transfer" />
        </div>
        <div class="payment-icon">
          <img src="~/assets/images/footer/MasterCard.svg" alt="MasterCard" />
        </div>
        <div class="payment-icon">
          <img src="~/assets/images/footer/PaySafe.svg" alt="PaySafe" />
        </div>
        <div class="payment-icon">
          <img src="~/assets/images/footer/MiFinity.svg" alt="MiFinity" />
        </div>
        <div class="payment-icon">
          <img src="~/assets/images/footer/Skrill.svg" alt="Skrill" />
        </div>
        <div class="payment-icon">
          <img src="~/assets/images/footer/Bitcoin.svg" alt="Bitcoin" />
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="footer-badges">
        <div class="badge-icon">
          <img src="~/assets/images/footer/FairCasino.svg" alt="Fair Casino" />
        </div>
        <div class="badge-icon">
          <img src="~/assets/images/footer/casinocom.svg" alt="Casino.com" />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <div class="footer-age">
          <img src="~/assets/images/footer/18+.svg" alt="18+" />
        </div>
        <div class="footer-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p>2025 © SpinEmpire.com. All Rights Reserved</p>
        <div class="footer-legal">
          <NuxtLink to="/privacy-policy" class="legal-link">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="legal-link">Terms & Conditions</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

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
  font-weight: 600;
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

  .footer-top {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 16px;
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
</style>

