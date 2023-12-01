<template>
  <main class="bg-light-gray pb-20">
    <section class="w-[1240px] mx-auto">
        <h1 class="mb-7 pt-16 text-zinc-900 font-semibold text-3xl">Secure your reservation</h1>
        <covedcheck class="mb-8"/>
    </section>
    <article class="flex  justify-center	">
      <section>
        <bookingform />
        <bookinginfo  @openmodel="openmodel"/>
      </section>
      <section class="flex flex-col items-center ml-8">
        <bookingroom />
        <pricedetails />
      </section>
    </article>
  <base-modal :btncontent="'View Trip'" @close="showmodal=false" :showmodal="showmodal">
    <img src="../assets/baid.png" alt="Booking Successful" class="w-[240px] h-[200px] my-12">
    <h2 class="text-xl font-semibold text-primary-black mb-3">Booking Successful</h2>
    <p class="text-base font-normal text-dark-gray mb-11">Congratulations your reservation has been made. You will be notified 2 days prior the date.</p>
  </base-modal>
 </main>
</template>

<script>
import covedcheck from '@/components/repetativ component/covedcheck.vue'
import Bookingroom from '@/components/Booking/bookingroom.vue'
import Pricedetails from '@/components/Booking/pricedetails.vue'
import Bookinginfo from '@/components/Booking/bookinginfo.vue'
import Bookingform from '@/components/Booking/bookingform.vue'
import BaseModal from '@/components/BaseModal.vue';
import { ref } from 'vue'

export default {
    components: { covedcheck, Bookingroom, Pricedetails, Bookinginfo, Bookingform, BaseModal },

    setup(){
      let showmodal = ref(null)
      function openmodel(){
        //check first all input were
        showmodal.value = true
      }
      return { openmodel , showmodal }
    }
}
</script>