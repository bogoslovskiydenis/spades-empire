<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <NuxtLink to="/" class="header-logo">
        <img src="~/assets/images/SpinEmpire.svg" alt="Spin Empire" class="logo-image" />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="header-nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/casino" class="nav-link">Casino</NuxtLink>
        <NuxtLink to="/bonuses" class="nav-link">Bonuses</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact us</NuxtLink>
      </nav>

      <!-- Auth Buttons -->
      <div class="header-actions">
        <button class="btn-user" aria-label="User profile">
          <img src="~/assets/images/user.svg" alt="User" class="user-icon" />
        </button>
        <AppButton variant="signup">Sign Up</AppButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #171821;
  height: 72px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 40px;
}

.header-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-self: start;
}

.logo-image {
  height: 40px;
  width: auto;
  display: block;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 40px;
  justify-self: center;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-self: end;
}

.btn-user {
  width: 48px;
  height: 48px;
  border-radius: var(--primary-radius);
  border: 1px solid var(--secondary-outline);
  background: transparent;
  color: var(--menu-link);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-user:hover {
  background: rgba(255, 255, 255, 0.1);
}

.user-icon {
  width: 24px;
  height: 24px;
}

/* Mobile Menu Toggle (hidden by default) */
@media (max-width: 1400px) {
  .header-container {
    padding: 0 40px;
  }
}

@media (max-width: 968px) {
  .header-container {
    padding: 0 20px;
  }
  
  .header-nav {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .header-nav {
    display: none;
  }
  
  .header-container {
    gap: 16px;
  }
}
</style>

