<template>
  <section>
    <h3 class="font-semibold text-2xl text-primary-black mb-8">Available rooms</h3>
    <section class="flex">
        <promotioncode />
        <div class="grid grid-cols-2 grid-flow-row gap-5 w-[800px]">
            <!--v for depend on data retairn from api-->
            <roomdetails :availablerooms="props.availablerooms"/>
        </div>
    </section>
  </section>
</template>

<script>
import Promotioncode from './promotioncode.vue'
import roomdetails from './roomdetails.vue'
export default {
  components: { roomdetails, Promotioncode },
  props:['availablerooms'],
  setup(props){
    return { props }
  }
}
</script>