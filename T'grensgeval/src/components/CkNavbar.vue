//TODO: Add hamburger bar

<template>
  <nav ref="navEl" class="ck-nav border-b-8 bg-bg-100 border-primary-100">
    <div class="w-full max-w-screen-xl mx-auto px-4 flex items-center justify-between">
      <!-- desktop menu -->
      <ul
        class="hidden lg:flex gap-24 flex-row justify-center items-center text-center p-6 text-xl font-light"
      >
        <li class="w-[140px]">
          <router-link to="/" class="hover:opacity-75">HOME</router-link>
        </li>
        <li class="w-[140px]">
          <router-link to="/Indeling" class="hover:opacity-75">INDELING</router-link>
        </li>
        <li class="w-[140px]">
          <router-link to="/Tarieven" class="hover:opacity-75">TARIEVEN</router-link>
        </li>
        <li class="w-[140px]">
          <router-link to="/Contact" class="hover:opacity-75">CONTACT</router-link>
        </li>
        <li class="w-[140px] text-opacity-75">
          <a
            href="https://www.huurkalender.nl/vacancy/vakantiewoning-t-grensgeval-21964.html"
            target="_blank"
            rel="noopener noreferrer"
            class="text-bg-100 font-semibold bg-primary-100 p-2 px-4 rounded-lg hover:opacity-75 ease-in-out duration-300"
            >BOEK NU</a
          >
        </li>
      </ul>

      <!-- mobile: hamburger button (also acts as close when open) -->
      <div class="flex items-center lg:hidden w-full justify-between py-4">
        <div class="pl-1">
          <!-- optional small brand / logo slot -->
        </div>

        <button
          @click="toggle"
          :aria-expanded="isOpen.toString()"
          aria-controls="mobile-menu"
          class="py-2 rounded-md inline-flex items-center justify-end text-gray-700 bg-transparent focus:outline-none"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- MOBILE OVERLAY (now starts below the navbar, full width) -->
    <transition name="overlay-fade">
      <div
        v-if="isOpen"
        class="mobile-overlay"
        @click.self="close"
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
      >
        <div class="mobile-panel" @click.stop>
          <ul class="mobile-list">
            <li><router-link @click="close" to="/" class="block py-4">HOME</router-link></li>
            <li>
              <router-link @click="close" to="/Indeling" class="block py-4">INDELING</router-link>
            </li>
            <li>
              <router-link @click="close" to="/Tarieven" class="block py-4">TARIEVEN</router-link>
            </li>
            <li>
              <router-link @click="close" to="/Contact" class="block py-4">CONTACT</router-link>
            </li>
            <li class="pt-2">
              <a
                @click="close"
                href="https://www.huurkalender.nl/vacancy/vakantiewoning-t-grensgeval-21964.html"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block text-bg-100 text-center font-semibold bg-primary-100 p-2 px-4 rounded-lg"
                >BOEK NU</a
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'CkNavbar',
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.updateNavHeight()
    window.addEventListener('resize', this.updateNavHeight)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateNavHeight)
    this.removeKeyListener()
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      if (this.isOpen) this.addKeyListener()
      else this.removeKeyListener()
    },
    close() {
      this.isOpen = false
      this.removeKeyListener()
    },
    onKey(e) {
      if (e.key === 'Escape') this.close()
    },
    addKeyListener() {
      document.addEventListener('keydown', this.onKey)
      document.body.style.overflow = 'hidden' // prevent background scroll
    },
    removeKeyListener() {
      document.removeEventListener('keydown', this.onKey)
      document.body.style.overflow = '' // restore scroll
    },
    updateNavHeight() {
      // expose nav height as CSS variable so overlay can start below the navbar
      const nav = this.$refs.navEl
      if (!nav) return
      const h = nav.offsetHeight || 0
      nav.style.setProperty('--nav-height', `${h}px`)
    }
  }
}
</script>

<style scoped>
/* overlay starts below navbar using the --nav-height variable set in mounted() */
.mobile-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--nav-height, 64px); /* fallback if JS didn't run yet */
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 60;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* full-width panel below the navbar (no rounded corners) */
.mobile-panel {
  background: #fff;
  width: 100%;
  max-width: none;
  border-radius: 0;
  box-shadow: none;
  padding: 1rem 1rem 2rem 1rem;
  position: relative;
}

/* list styling */
.mobile-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 300;
  padding-top: 0.25rem;
}

/* transition */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition:
    opacity 180ms ease,
    transform 220ms ease;
}
.overlay-fade-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.995);
}
.overlay-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.overlay-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.overlay-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.995);
}

/* keep desktop menu behavior unchanged */
@media (min-width: 1024px) {
  .mobile-overlay {
    display: none;
  }
}
</style>
