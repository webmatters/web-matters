`<template>
  <header
    class="container mx-auto bg-white md:flex md:justify-between md:px-8 md:py-6 md:items-center"
  >
    <div class="flex items-center justify-between px-8 py-6 md:p-0">
      <!-- Brand Logo -->
      <div>
        <a href="#">
          <img
            class="h-12"
            src="~assets/img/wm-logo.png"
            alt="Web Matters logo"
          />
        </a>
      </div>
      <!-- Mobile Menu Toggler -->
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block focus:outline-none text-gray-900 hover:text-gray-600 active:text-gray-900"
        >
          <menu-icon v-if="!isOpen" class="fill-current" />
          <close-icon v-else class="fill-current" />
        </button>
      </div>
    </div>

    <!-- Nav links -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="px-8 pb-4 md:flex md:items-center md:p-0 font-semibold"
    >
      <a href="#" class="block md:ml-6 mt-2 text-primary hover:text-secondary"
        >Our Services</a
      >
      <a href="#" class="block mt-2 md:ml-6 text-primary hover:text-secondary"
        >Why Web Matters?</a
      >
      <a
        href="#"
        class="inline-block mt-3 md:ml-6 bg-cta rounded-lg md:rounded-full px-4 py-2 text-white hover:text-white text-sm uppercase"
        >Contact Us</a
      >
    </div>
  </header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
export default {
  components: {
    MenuIcon,
    CloseIcon
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
