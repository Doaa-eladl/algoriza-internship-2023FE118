<template>  
  <introsection />
  <covedcheck class="mt-20  pb-12"/>
  <dreamvacationsection />
  <inspirenexttripsection />
  <popularhotelssection />
  <mobileappsection />
  <exploarmore />
  <base-modal :btncontent="'Get Started'" @close="booking.isfirst=false" v-if="booking.isfirst">
    <img src="../assets/hello.png" alt="boy and girl discover" class="w-[240px] h-[200px] my-12">
    <h2 class="text-xl font-semibold text-primary-black mb-3">Welcome to My Dream Place</h2>
    <p class="text-base font-normal text-dark-gray mb-11 w-[352px]">You can now enjoy your travel experience with easy access to resources and more</p>
  </base-modal>
</template>

<script>
import Introsection from '@/components/Home/introsection.vue'
import Covedcheck from '@/components/repetativ component/covedcheck.vue'
import dreamvacationsection from '@/components/Home/dreamvacationsection.vue';
import Inspirenexttripsection from '@/components/Home/inspirenexttripsection.vue';
import Popularhotelssection from '@/components/Home/popularhotelssection.vue';
import Mobileappsection from '@/components/Home/mobileappsection.vue';
import Exploarmore from '@/components/Home/exploarmore.vue';
import BaseModal from '@/components/BaseModal.vue';

import { usebooking } from '@/stores/booking';

export default {
  components: {
    Introsection,
    Covedcheck,
    dreamvacationsection,
    Inspirenexttripsection,
    Popularhotelssection,
    Mobileappsection,
    Exploarmore,
    BaseModal
  },

  setup(){
    const booking = usebooking()
    return { booking }
  }
}
</script>
