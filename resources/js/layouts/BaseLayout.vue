<template>
  <div class="layout" :class="{ 'sidebar-open': isSidebarOpen }">
    <!-- Overlay -->
    <div
      v-if="isSidebarOpen && isMobile"
      class="overlay"
      @click="closeSidebar"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ closed: !isSidebarOpen }">
      <div class="sidebar-top">
        <div class="brand" v-show="isSidebarOpen">Find ME</div>

        <button class="icon-btn" @click="toggleSidebar" aria-label="Toggle sidebar">
          <span v-if="isSidebarOpen">✕</span>
          <span v-else>☰</span>
        </button>
      </div>

      <!-- Menu -->
      <nav class="menu">
        <!-- Admin only -->
        <RouterLink
          v-if="canSeeAllMenus"
          to="/home"
          class="menu-link"
          @click="closeOnMobile"
        >
          <span class="icon">🏠</span>
          <span class="text" v-show="isSidebarOpen">{{ t('menu.home') }}</span>
        </RouterLink>

        <!-- Everyone logged in can see test -->
        <RouterLink to="/find-location" class="menu-link" @click="closeOnMobile">
          <span class="icon">🧪</span>
          <span class="text" v-show="isSidebarOpen">{{ t('menu.find_location') }}</span>
        </RouterLink>

        <!-- Location -->
        <div class="menu-group" v-if="canSeeAllMenus">
          <button
            class="menu-link menu-group-btn"
            type="button"
            @click="toggleGroup('location')"
            :aria-expanded="openGroups.location"
          >
            <span class="icon">📍</span>
            <span class="text" v-show="isSidebarOpen">{{ t('menu.location') }}</span>
            <span class="chev" v-show="isSidebarOpen" :class="{ open: openGroups.location }">
              ▾
            </span>
          </button>

          <div v-show="isSidebarOpen && openGroups.location" class="submenu">
            <RouterLink to="/provinces" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.provinces') }}</span>
            </RouterLink>

            <RouterLink to="/districts" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.districts') }}</span>
            </RouterLink>

            <RouterLink to="/communes" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.commune') }}</span>
            </RouterLink>

            <RouterLink to="/od" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.od') }}</span>
            </RouterLink>

            <RouterLink to="/hc" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.hc') }}</span>
            </RouterLink>

            <RouterLink to="/villages" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.villages') }}</span>
            </RouterLink>
          </div>
        </div>

        <!-- Management -->
        <div class="menu-group" v-if="canSeeAllMenus">
          <button
            class="menu-link menu-group-btn"
            type="button"
            @click="toggleGroup('management')"
            :aria-expanded="openGroups.management"
          >
            <span class="icon">👤</span>
            <span class="text" v-show="isSidebarOpen">{{ t('menu.management') }}</span>
            <span class="chev" v-show="isSidebarOpen" :class="{ open: openGroups.management }">
              ▾
            </span>
          </button>

          <div v-show="isSidebarOpen && openGroups.management" class="submenu">
            <RouterLink to="/register" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.users') }}</span>
            </RouterLink>

            <RouterLink to="/roles" class="submenu-link" @click="closeOnMobile">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.roles') }}</span>
            </RouterLink>
          </div>
        </div>

        <!-- Setting -->
        <div class="menu-group" v-if="canSeeAllMenus">
          <button
            class="menu-link menu-group-btn"
            type="button"
            @click="toggleGroup('setting')"
            :aria-expanded="openGroups.setting"
          >
            <span class="icon">⚙️</span>
            <span class="text" v-show="isSidebarOpen">{{ t('menu.setting') }}</span>
            <span class="chev" v-show="isSidebarOpen" :class="{ open: openGroups.setting }">
              ▾
            </span>
          </button>

          <div v-show="isSidebarOpen && openGroups.setting" class="submenu">
            <!-- Language -->
            <div class="submenu-link lang-switch" role="group" aria-label="Language switch">
              <button
                class="lang-btn"
                type="button"
                :class="{ active: locale === 'km' }"
                @click="setLocale('km')"
                :title="isSidebarOpen ? 'Khmer' : ''"
              >
                <img class="flag" :src="flagKh" alt="Cambodia flag" />
                <span class="submenu-text lang-text" v-show="isSidebarOpen">KH</span>
              </button>

              <button
                class="lang-btn"
                type="button"
                :class="{ active: locale === 'en' }"
                @click="setLocale('en')"
                :title="isSidebarOpen ? 'English' : ''"
              >
                <img class="flag" :src="flagEn" alt="English flag" />
                <span class="submenu-text lang-text" v-show="isSidebarOpen">EN</span>
              </button>
            </div>

            <!-- Dark mode -->
            <div class="submenu-link theme-row" role="group" aria-label="Theme switch">
              <span class="dot"></span>
              <span class="submenu-text">{{ t('menu.darkMode') }}</span>

              <button
                class="switch"
                type="button"
                :class="{ on: isDark }"
                @click="toggleDark"
                :aria-pressed="isDark"
                aria-label="Toggle dark mode"
              >
                <span class="knob"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Bottom -->
      <div class="sidebar-bottom">
        <RouterLink to="/" class="logout-link" @click="logout">
          <span class="icon">🔓</span>
          <span v-show="isSidebarOpen">{{ t('menu.logout') }}</span>
        </RouterLink>

        <footer class="sidebar-footer">
          <small>© 2026 <b>Find ME</b></small>
        </footer>
      </div>
    </aside>

    <!-- Content -->
    <div class="content">
      <header class="topbar mx-3">
        <button class="icon-btn icon-navbar" @click="toggleSidebar" aria-label="Toggle sidebar">
          ☰
        </button>

        <img src="@/assets/logo_moh.png" alt="Logo MOH" class="logo" />

        <div class="title">{{ t('menu.title') }}</div>

        <div class="topbar-right">
          <div class="user-box">
            <div class="user-info">
              <div class="username">{{ currentUser?.username || 'Guest' }}</div>
              <div class="role">{{ roleName || '-' }}</div>
            </div>
            <img :src="currentUser?.profile_image_url || defaultAvatar" class="avatar" alt="User" />
          </div>
        </div>
      </header>

      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

import flagKh from '@/assets/flag_cambodia.png'
import flagEn from '@/assets/flag_english.png'
import defaultAvatar from '@/assets/user.png'

const isSidebarOpen = ref(true)
const isMobile = ref(false)
const isDark = ref(false)
const currentUser = ref(null)

const { locale: i18nLocale, t } = useI18n()
const locale = computed(() => i18nLocale.value)

const openGroups = ref({
  management: false,
  location: false,
  setting: false,
})

const setLocale = (lang) => {
  i18nLocale.value = lang
  localStorage.setItem('app_locale', lang)
}

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 900
}

const applyTheme = (dark) => {
  document.documentElement.classList.toggle('dark', dark)
}

const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem('app_theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

const toggleGroup = (key) => {
  openGroups.value[key] = !openGroups.value[key]
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const closeOnMobile = () => {
  if (isMobile.value) {
    closeSidebar()
  }
}

const logout = () => {
  localStorage.removeItem('user')
  window.location.href = '/'
}

const roleName = computed(() => currentUser.value?.role?.name || '')
const isAdmin = computed(() => roleName.value === 'admin')
const isStaffOrUser = computed(() => ['staff', 'user'].includes(roleName.value))

const canSeeAllMenus = computed(() => isAdmin.value)
const canSeeTestOnly = computed(() => isStaffOrUser.value)

onMounted(() => {
   updateIsMobile()
  window.addEventListener('resize', updateIsMobile)

  const savedTheme = localStorage.getItem('app_theme')
  isDark.value = savedTheme === 'dark'
  applyTheme(isDark.value)

  const savedLocale = localStorage.getItem('app_locale')
  if (savedLocale) {
    i18nLocale.value = savedLocale
  }

  const userData = localStorage.getItem('user')
  currentUser.value = userData ? JSON.parse(userData) : null

  if (currentUser.value?.role?.name) {
    currentUser.value.role.name = currentUser.value.role.name.toLowerCase()
  }

  if (isMobile.value) {
    isSidebarOpen.value = false
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<style scoped>
/* ===== Theme Variables ===== */
:global(html) {
  --bg: #F9F9F9;
  --panel: #ffffff;
  --border: #eeeeee;
  --text: #111111;
  --muted: #777777;
  --hover: #f6f6f6;
  --active: #efefef;
}

:global(html.dark) {
  --bg: #0f172a;
  /* page background */
  --panel: #111827;
  /* sidebar/topbar */
  --border: rgba(255, 255, 255, 0.08);
  --text: #e5e7eb;
  --muted: rgba(229, 231, 235, 0.7);
  --hover: rgba(255, 255, 255, 0.06);
  --active: rgba(255, 255, 255, 0.10);
}

/* ===== Dark Mode Switch ===== */
.theme-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.theme-row .submenu-text {
  flex: 1;
}

.switch {
  width: 46px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: #ffffff;
  position: relative;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;
}

:global(html.dark) .switch {
  background: rgba(255, 255, 255, 0.12);
}

.switch .knob {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid #777777;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  transition: left 0.2s ease;
}

.switch.on .knob {
  left: 23px;
}


/* Language switch row */
.lang-switch {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 10px;
}

/* Buttons */
.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease, border-color 0.15s ease;
}

.lang-btn:hover {
  background: var(--hover);
  transform: translateY(-1px);
  border-color: 1px solid var(--border);

}

/* Active language */
.lang-btn.active {
  background: #efefef;
  border-color: #d8d8d8;
  font-weight: 700;
  color: #111827
}

.flag {
  width: 22px;
  height: 16px;
  object-fit: cover;
  border-radius: 3px;
}

/* If sidebar collapsed, keep buttons compact */
.sidebar.closed .lang-switch {
  justify-content: center;
  padding: 8px 0;
}

.sidebar.closed .lang-btn {
  padding: 8px;
}



/* Layout */
.layout {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  position: relative;
}

/* Sidebar (desktop default) */
.sidebar {
  background: var(--panel);
  border-right: 1px solid var(--border);
  width: 260px;
  border-right: 1px solid #eee;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: width 0.25s ease-in-out, transform 0.25s ease;
  font-family: "Khmer OS Battambang";
}

/* CLOSED (desktop): collapse to rail */
.sidebar.closed {
  width: 62px;
  padding: 16px 10px;
}

/* Sidebar header */
.sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand {
  font-weight: 800;
  font-size: 18px;
  white-space: nowrap;
}

/* Menu */
.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-link {
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.menu-link:hover {
  background: var(--hover);
  background: #f6f6f6;
  color: #111827;
}

/* Active link */
.menu-link.router-link-exact-active {
  background: var(--active);
  background: #efefef;
  font-weight: 700;
  color: #111827;
}

.icon {
  width: 24px;
  display: inline-flex;
  justify-content: center;
}

/* When collapsed, center icons */
.sidebar.closed .menu-link {
  justify-content: center;
  padding: 12px;
}

/* Submenu group */
.menu-group-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.chev {
  margin-left: auto;
  transition: transform 0.2s ease;
}

.chev.open {
  transform: rotate(180deg);
}

/* Submenu container */
.submenu {
  margin-top: 6px;
  margin-left: 34px;
  /* indent under icon */
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.submenu-link {
  padding: 8px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
}

.submenu-link:hover {
  background: var(--hover);
}

.submenu-link.router-link-exact-active {
  background: var(--active);
  font-weight: 700;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #999;
  margin-top: 2px;
}

/* Content */
.content {
  flex: 1;
  min-width: 0;
}

.topbar {
  border-bottom: 1px solid var(--border);
  height: 76px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
  font-family: "Khmer OS Muol light";
}

/* Logo */
.logo {
  width: 40px;
  margin-left: 0.5rem;
}

.title {
  font-weight: 700;
  font-size: 18px;
}

.main {
  padding: 16px;
}


/* Right side navbar */
.topbar-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* User container */
.user-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--border);
  padding: 6px 20px;
  border-radius: 12px;
}

/* Avatar */
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}

/* Text info */
.user-info {
  text-align: right;
  line-height: 1.2;
  margin-right: 5px;
}

.username {
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px gainsboro dashed;
}

.role {
  font-size: 12px;
  color: var(--muted);
}

/* Buttons */
.icon-btn {
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 10px;
  padding: 12px 14px;
  cursor: pointer;
}


.icon-navbar {
  display: none;
}

.icon-btn:hover {
  background: var(--hover);
}

/* Overlay for mobile */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 10;
}

/* Make sidebar full height flex */
.sidebar {
  display: flex;
  flex-direction: column;
}

/* Bottom container */
.sidebar-bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
}

/* Logout style */
.logout-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #d11a2a;
  font-weight: 600;
  width: 100%;
}

.logout-link:hover {
  background: #ffecec;
}

/* Footer */
.sidebar-footer {
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding-top: 12px;
  color: var(--muted);
  border-top: 1px solid #d8d8d8;
}

.sidebar.closed .sidebar-footer {
  display: none;
}

/* MOBILE: sidebar becomes drawer */
@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 11;
    transform: translateX(-100%);
    width: 260px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .layout.sidebar-open .sidebar {
    transform: translateX(0);
  }

  .sidebar.closed {
    width: 260px;
    padding: 16px;
  }

  .icon-navbar {
    display: block;
  }
  /* ទំហំអក្សរ ក្រសួងសុខាភិបាល */
  .title {
  font-size: 16px;
}
}
</style>