<template>
  <section class="flex justify-between w-[1240px]">
    <hotelfacilities :hotelid="props.hotelid" :hoteldata="props.hoteldata" :facilities="props.facilities"/>
    <hotelarea :mapsrc="props.mapsrc"/>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import Hotelarea from './hotelarea.vue'
import hotelfacilities from './hotelfacilities.vue'
export default {
  components: { hotelfacilities, Hotelarea },
  props:['mapsrc','hotelid','hoteldata','facilities'],
  setup(props){
    return { props }
  }
}
</script>