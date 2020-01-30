<template>
  <div>
    <!-- Hero -->
    <section class="bg-white ">
      <!-- Hero Text -->
      <div class="container sm:flex mx-auto my-8 sm:py-24">
        <div class=" text-center sm:w-1/2 sm:text-left px-4">
          <h1 class="tracking-tight leading-tight text-3xl sm:text-4xl ">
            Web Services to Propel Your Business
          </h1>
          <h2 class="mt-4">
            Thoughtfully designed and meticulously developed apps guided by
            expert strategy. All reasonably priced for entrepreneurs.
          </h2>
          <div class="hidden sm:inline-block mt-20">
            <a
              href="#"
              type="=button"
              class="bg-cta rounded-full text-white py-2 px-4 shadow-xl"
              >Free Strategy Session</a
            >
          </div>
        </div>
        <!-- Hero Image -->
        <div class="mt-8 sm:w-1/2">
          <img src="~assets/img/rocket-turtle.jpg" alt="Rocket turtle" />
        </div>
        <div class="text-center mt-20 sm:hidden">
          <a
            href="#"
            type="=button"
            class="bg-cta rounded-full text-white py-2 px-4 inline-block"
            >Free Strategy Session</a
          >
        </div>
      </div>
    </section>
    <!-- Services -->
    <section class="container mx-auto text-center pt-12 pb-24">
      <h2 class=" uppercase text-2xl">
        What We Do
      </h2>
      <services-tabs class="mt-8" />
    </section>
    <!-- Why Web Matters? -->
    <section class="container mx-auto text-center py-12">
      <h2 class=" uppercase text-2xl">
        Why Web Matters?
      </h2>
      <div class="mt-8">
        Test text
      </div>
    </section>
  </div>
</template>

<script>
import ServicesTabs from '@/components/ServicesTabs.vue'
export default {
  components: {
    ServicesTabs
  }
}
</script>
