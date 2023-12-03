<template>
    <div class="bg-white w-[400px] h-[400px] rounded mx-auto flex flex-col mb-6 rounded">
    <img :src="route.query.hotelimg" alt="hotel view" class="w-[400px] h-[180px] mb-5 rounded-t">
    <div class="ml-5 mb-5">
        <h2 class="text-zinc-900 text-xl font-medium mb-1.5"> {{ route.query.hotelname }}</h2>
        <div class="flex mb-6">
            <div class="flex mr-3">
                <img src="../../assets/star-s-fill 1.png" alt="star full rate" v-for="i in Number(route.query.intrate)" :key="i">
                <img src="../../assets/star-s-fill 5.png" alt="half star rate" v-if="route.query.doublerate>0">
            </div>
            <p class="font-normal text-sm	text-dark-gray">{{ route.query.intrate }}<span v-if="route.query.doublerate>0">.{{ route.query.doublerate }}</span> ({{ route.query.reviewnum }} Reviews)</p>
        </div>
        <div class="grid grid-rows-4 gap-y-2 font-normal text-sm text-dark-gray">
        <p class="text-red-500">Non refundable</p>
        <p>Check in: {{ new Date(booking.searchvalobj.checkindate)
        .toLocaleDateString("en-US", 
        {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</p>
        <p>Check out: {{ new Date(booking.searchvalobj.checkoutdate)
        .toLocaleDateString("en-US", 
        {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</p>
        <p>{{ Math.ceil(
            Math.abs(
            new Date(booking.searchvalobj.checkindate) - 
            new Date(booking.searchvalobj.checkoutdate))
            / (1000 * 60 * 60 * 24)) }}
         night stay</p>
        </div>
    </div>
    </div>
  </template>
  
<script>
import { usebooking } from '@/stores/booking'
import { useRoute } from 'vue-router'
export default {
    setup(){
        const route = useRoute()
        const booking = usebooking()

        return { route , booking }
    }
}
</script>