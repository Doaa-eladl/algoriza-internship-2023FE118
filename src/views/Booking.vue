<template>
  <main class="bg-light-gray pb-12">
    <section class="w-[1240px] mx-auto">
        <h1 class="mb-7 pt-16 text-zinc-900 font-semibold text-3xl">Secure your reservation</h1>
        <covedcheck class="mb-8"/>
    </section>
    <article class="flex  justify-center	">
      <section>
        <bookingform />
        <bookinginfo />
      </section>
      <section class="flex flex-col items-center ml-8">
        <bookingroom />
        <pricedetails />
      </section>
    </article>
 </main>
</template>

<script>
import covedcheck from '@/components/repetativ component/covedcheck.vue'
import Bookingroom from '@/components/Booking/bookingroom.vue'
import Pricedetails from '@/components/Booking/pricedetails.vue'
import Bookinginfo from '@/components/Booking/bookinginfo.vue'
import Bookingform from '@/components/Booking/bookingform.vue'
export default {
    components: { covedcheck, Bookingroom, Pricedetails, Bookinginfo, Bookingform },
}
</script>