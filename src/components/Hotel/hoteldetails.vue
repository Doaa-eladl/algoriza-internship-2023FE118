<template>
  <section class="flex justify-between w-[1240px]">
    <hotelfacilities />
    <hotelarea />
  </section>
</template>

<script>
import Hotelarea from './hotelarea.vue'
import hotelfacilities from './hotelfacilities.vue'
export default {
  components: { hotelfacilities, Hotelarea },

}
</script>