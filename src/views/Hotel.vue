<template>
  <article class="flex justify-center py-6 bg-gradient-to-b from-light-gray to-white">
    <hotelview />
  </article>
  <section class="flex justify-center">
    <div class="mt-1.5 w-[1240px] mb-[8px]">
      <span class="py-2.5 px-3.5 mr-3.5 border-b-4 border-light-blue">Overview</span>
      <span class="py-2.5 px-3.5">Rooms</span>
    </div>
  </section>
  <article class="pt-10 bg-light-gray">
    <hoteldetails />
  </article>
</template>

<script>
import Hotelview from '@/components/Hotel/hotelview.vue'
import Hoteldetails from '@/components/Hotel/hoteldetails.vue'
export default {
  components: {Hotelview, Hoteldetails  },

}
</script>

<style>

</style>