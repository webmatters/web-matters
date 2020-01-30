<template>
  <div
    class="font-body w-full min-h-screen flex flex-col text-gray-900 bg-gray-200"
  >
    <the-navbar />
    <nuxt class="flex-grow" />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
