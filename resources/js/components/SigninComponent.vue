<template>
  <div class="login-page">
    <div class="login-box">
      <!-- Logo -->
      <img src="@/assets/logo_moh.png" alt="Logo MOH" class="logo" />

      <h4 class="mb-5">{{ t('login.title') }}</h4>

      <form class="login-form" @submit.prevent="onLogin">
        <div v-if="loginErrorMessage" class="alert alert-danger" role="alert">
          {{ loginErrorMessage }}
        </div>

        <div class="form-group">
          <label>{{ t('login.username') }}</label>
          <input type="text" :placeholder="t('login.enterUsername')" v-model.trim="username" :disabled="loading" />
        </div>

        <div class="form-group">
          <label>{{ t('login.password') }}</label>
          <input type="password" :placeholder="t('login.enterPassword')" v-model="password" :disabled="loading" />
        </div>

        <div class="login-links">
          <a href="#" class="forgotpassword" @click.prevent="openForgotModal">
            {{ t('login.forgotPassword') }}
          </a>

          <a href="#" class="needhelp" @click.prevent="showHelpModal = true">
            {{ t('login.needHelp') }}
          </a>
        </div>

        <button type="submit" class="login-btn" :disabled="loading">
          {{ loading ? t('login.signingIn') : t('login.signIn') }}
        </button>
      </form>
    </div>

    <!-- Help Modal -->
    <div v-if="showHelpModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="helpModalTitle"
      @click.self="closeHelp">
      <div class="modal-box" tabindex="-1" ref="helpModal">
        <div class="modal-header">
          <h3 class="modal-title" id="helpModalTitle">{{ t('login.needHelp') }}</h3>

          <button class="modal-close" type="button" :aria-label="t('login.close')" @click="closeHelp">
            ✕
          </button>
        </div>

        <p class="modal-text">
          {{ t('login.helpMessage1') }} <br />
          <b>{{ t('login.helpMessage2') }}</b>
        </p>

        <div class="modal-info">
          <div class="info-row">
            <i class="fas fa-phone-alt info-icon"></i>
            <div>
              <div class="info-label">{{ t('login.phone') }}</div>
              <a href="tel:+85517940760" class="info-value link">+855 17 940 760</a>
            </div>
          </div>

          <div class="info-row">
            <i class="fab fa-telegram-plane info-icon telegram"></i>
            <div>
              <div class="info-label">{{ t('login.telegram') }}</div>
              <a href="https://t.me/MOH" target="_blank" class="info-value link">
                @MOH_Cambodia
              </a>
            </div>
          </div>

          <div class="info-row">
            <i class="fas fa-envelope info-icon gmail"></i>
            <div>
              <div class="info-label">{{ t('login.gmail') }}</div>
              <a href="mailto:moh_cambodia@gmail.com" class="info-value link">
                moh_cambodia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="forgotModalTitle"
      @click.self="closeForgot">
      <div class="modal-box" tabindex="-1" ref="forgotModal">
        <div class="modal-header">
          <h3 class="modal-title" id="forgotModalTitle">{{ t('login.forgotPasswordTitle') }}</h3>

          <button class="modal-close" type="button" :aria-label="t('login.close')" @click="closeForgot">
            ✕
          </button>
        </div>

        <p class="modal-text">
          {{ t('login.forgotPasswordDescription') }}
        </p>

        <form @submit.prevent="sendLink">
          <div class="form-group">
            <label>{{ t('login.email') }}</label>
            <input type="email" v-model.trim="email" :placeholder="t('login.enterEmail')" :disabled="forgotLoading" />
          </div>

          <button type="submit" class="login-btn" :disabled="forgotLoading">
            {{ forgotLoading ? t('login.sending') : t('login.sendResetLink') }}
          </button>
        </form>
      </div>
    </div>

    <!-- Forgot Password Result Modal -->
    <div v-if="showForgotResultModal" class="modal-overlay" role="dialog" aria-modal="true"
      aria-labelledby="forgotResultModalTitle" @click.self="closeForgotResultModal">
      <div class="modal-box result-modal" tabindex="-1" ref="forgotResultModal">
        <div class="modal-header">
          <h3 class="modal-title" id="forgotResultModalTitle">
            {{
              forgotResultType === 'success'
                ? t('login.success')
                : t('login.error')
            }}
          </h3>

          <button class="modal-close" type="button" :aria-label="t('login.close')" @click="closeForgotResultModal">
            ✕
          </button>
        </div>

        <div class="result-icon" :class="forgotResultType === 'success' ? 'success' : 'error'">
          {{ forgotResultType === 'success' ? '✓' : '!' }}
        </div>

        <p class="modal-text result-text">
          {{ forgotResultMessage }}
        </p>

        <button class="login-btn" @click="closeForgotResultModal">
          {{ t('login.ok') }}
        </button>
      </div>
    </div>

    <!-- Login Loading Modal -->
    <div v-if="loading" class="loading-overlay" role="dialog" aria-modal="true">
      <div class="loading-box" :aria-label="t('login.loggingIn')">
        <div class="spinner"></div>
        <div class="loading-text">{{ t('login.signingIn') }}</div>
      </div>
    </div>

    <!-- Forgot Password Loading Modal -->
    <div v-if="forgotLoading" class="loading-overlay" role="dialog" aria-modal="true">
      <div class="loading-box" :aria-label="t('login.sendingResetLink')">
        <div class="spinner"></div>
        <div class="loading-text">{{ t('login.sendingResetLink') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useI18n } from "vue-i18n";

export default {
  name: "LoginView",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },

  data() {
    return {
      showHelpModal: false,
      showForgotModal: false,
      showForgotResultModal: false,

      username: "",
      password: "",

      email: "",
      forgotLoading: false,

      forgotResultType: "", // success | error
      forgotResultMessage: "",

      loginErrorMessage: "",
      loading: false,
    };
  },

  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
  },

  watch: {
    loading(v) {
      if (v) {
        document.body.style.overflow = "hidden";
      } else if (
        !this.showHelpModal &&
        !this.showForgotModal &&
        !this.showForgotResultModal &&
        !this.forgotLoading
      ) {
        document.body.style.overflow = "";
      }
    },

    forgotLoading(v) {
      if (v) {
        document.body.style.overflow = "hidden";
      } else if (
        !this.showHelpModal &&
        !this.showForgotModal &&
        !this.showForgotResultModal &&
        !this.loading
      ) {
        document.body.style.overflow = "";
      }
    },

    showHelpModal(v) {
      document.body.classList.toggle(
        "modal-open",
        v || this.showForgotModal || this.showForgotResultModal
      );

      if (v) {
        this.$nextTick(() => {
          this.$refs.helpModal?.focus?.();
        });
      }

      if (
        !v &&
        !this.showForgotModal &&
        !this.showForgotResultModal &&
        !this.loading &&
        !this.forgotLoading
      ) {
        document.body.style.overflow = "";
      }
    },

    showForgotModal(v) {
      document.body.classList.toggle(
        "modal-open",
        v || this.showHelpModal || this.showForgotResultModal
      );

      if (v) {
        this.$nextTick(() => {
          this.$refs.forgotModal?.focus?.();
        });
      }

      if (
        !v &&
        !this.showHelpModal &&
        !this.showForgotResultModal &&
        !this.loading &&
        !this.forgotLoading
      ) {
        document.body.style.overflow = "";
      }
    },

    showForgotResultModal(v) {
      document.body.classList.toggle(
        "modal-open",
        v || this.showHelpModal || this.showForgotModal
      );

      if (v) {
        this.$nextTick(() => {
          this.$refs.forgotResultModal?.focus?.();
        });
      }

      if (
        !v &&
        !this.showHelpModal &&
        !this.showForgotModal &&
        !this.loading &&
        !this.forgotLoading
      ) {
        document.body.style.overflow = "";
      }
    },
  },

  methods: {
    async onLogin() {
      this.loginErrorMessage = "";
      this.loading = true;

      try {
        const res = await axios.post("http://127.0.0.1:8000/api/login", {
          username: this.username,
          password: this.password,
        });

        localStorage.setItem("user", JSON.stringify(res.data.user));

        const roleName = res.data.user?.role?.name?.toLowerCase();

        if (roleName === "admin") {
          this.$router.push("/home");
        } else {
          this.$router.push("/find-location");
        }
      } catch (err) {
        this.loginErrorMessage =
          err?.response?.data?.message ||
          this.t("login.loginFailed");
      } finally {
        this.loading = false;
      }
    },

    async sendLink() {
    this.forgotLoading = true;
    this.forgotResultMessage = "";
    this.forgotResultType = "";

    const forgotRequest = axios.post("http://127.0.0.1:8000/api/forgot-password", {
      email: this.email,
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    this.showForgotModal = false;
    this.forgotLoading = false;

    try {
      const res = await forgotRequest;

      this.forgotResultType = "success";
      this.forgotResultMessage =
        res.data.message || this.t("login.resetLinkSent");

      this.showForgotResultModal = true;
      this.email = "";
    } catch (err) {
      this.forgotResultType = "error";
      this.forgotResultMessage =
        err?.response?.data?.message || this.t("login.resetLinkFailed");

      this.showForgotResultModal = true;
    }
  },

    openForgotModal() {
      this.email = "";
      this.showForgotModal = true;
      this.forgotResultMessage = "";
      this.forgotResultType = "";
    },

    closeHelp() {
      this.showHelpModal = false;
    },

    closeForgot() {
      this.showForgotModal = false;
      this.email = "";
    },

    closeForgotResultModal() {
      this.showForgotResultModal = false;
      this.forgotResultMessage = "";
      this.forgotResultType = "";
    },

    onKeydown(e) {
      if (e.key === "Escape") {
        if (this.showHelpModal) this.closeHelp();
        if (this.showForgotModal) this.closeForgot();
        if (this.showForgotResultModal) this.closeForgotResultModal();
      }
    },
  },
};
</script>

<style scoped>
/* keep your existing style exactly the same */
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.loading-box {
  background: #fff;
  padding: 22px 26px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.spinner {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 5px solid #e6e6e6;
  border-top-color: #eabe0d;
  animation: spin 0.9s linear infinite;
}

.loading-text {
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.login-page {
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Khmer OS Battambang", sans-serif;
}

.login-box {
  width: 380px;
  padding: 40px;
  border-radius: 16px;
  background: linear-gradient(to bottom, #fbf9df, #fffef7);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.logo {
  width: 80px;
  margin-bottom: 15px;
  display: block;
  margin: 0 auto 20px;
}

.title {
  margin-bottom: 25px;
  font-weight: 600;
  color: #333;
}

.form-group {
  text-align: left;
  margin-bottom: 18px;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #facc15;
  box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.2);
}

.login-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.needhelp,
.forgotpassword {
  font-size: 13px;
  color: #888;
  text-decoration: none;
}

.needhelp:hover,
.forgotpassword:hover {
  color: #facc15;
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #facc15;
  font-weight: 600;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #eab308;
  color: white;
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: left;
  margin-bottom: 16px;
}

.alert-danger {
  background: #fdecec;
  color: #b42318;
  border: 1px solid #f5c2c7;
}

.alert-success {
  background: #ecfdf3;
  color: #067647;
  border: 1px solid #abefc6;
}

:global(body.modal-open) {
  overflow: hidden;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(15, 15, 15, 0.45);
  backdrop-filter: blur(6px);
  z-index: 9999;
}

.modal-box {
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
  padding: 18px;
  outline: none;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
}

.modal-close {
  width: 36px;
  height: 36px;
  border: 1px solid #e9e9e9;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
}

.modal-close:hover {
  background-color: #e6e6e6;
  border: 1px solid #ddd;
}

.modal-text {
  margin-bottom: 14px;
  color: #444;
}

.modal-info {
  background: #fbfbfb;
  border-radius: 14px;
  padding: 12px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
}

.info-row+.info-row {
  border-top: 1px dashed #e9e9e9;
}

.info-icon {
  font-size: 16px;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #facc15;
  color: #222;
}

.info-icon.telegram {
  background: #229ed9;
  color: #fff;
}

.info-icon.gmail {
  background: #ea4335;
  color: #fff;
}

.info-label {
  font-size: 12px;
  font-weight: 700;
  color: #666;
}

.info-value {
  font-size: 13px;
  color: #111;
}

.link {
  text-decoration: none;
  color: #111;
}

.link:hover {
  color: #eab308;
  font-weight: 700;
}

.result-modal {
  text-align: center;
}

.result-icon {
  width: 70px;
  height: 70px;
  margin: 8px auto 16px;
  border-radius: 50%;
  font-size: 34px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-icon.success {
  background: #ecfdf3;
  color: #067647;
  border: 2px solid #abefc6;
}

.result-icon.error {
  background: #fdecec;
  color: #b42318;
  border: 2px solid #f5c2c7;
}

.result-text {
  text-align: center;
  font-size: 15px;
}
</style>