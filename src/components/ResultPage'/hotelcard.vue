<template>
  <div v-for="hotel in booking.hotels" :key="hotel.hotel_id" class="w-[966px] border p-5 flex flex-row items-center rounded mb-6 items-start box-border h-[240px]">
    <div>
        <img :src="hotel.property.photoUrls[0]" alt="hotel photo" class="rounded w-[285px] h-[200px] mr-6">
    </div>
    <div class="h-[200px]">
        <h2 class="text-[#1A1A1A] text-xl font-medium mb-2">{{ hotel.property.name }}</h2>
        <div class="flex mb-2">
            <div class="flex mr-3">
                <img src="../../assets/star-s-fill 1.png" alt="full star" v-for="i in intrate" :key="i">
                <img src="../../assets//star-s-fill 5.png" alt="half star" v-if="doublerate>0">
            </div>
            <p class="text-dark-gray text-sm font-normal">{{ calcrate(hotel.property.reviewScore) }} ({{ hotel.property.reviewCount }} Reviews)</p>
        </div>
        <p class="w-[430px] text-[#1A1A1A] text-sm font-medium mb-5">{{ hotel.accessibilityLabel }}</p>
        <router-link :to="{ name:'hotel' }" class="btn">See availability</router-link>
    </div>
    <div class="flex flex-col justify-end h-[200px] items-end" :class="[hotel.property.priceBreakdown.strikethroughPrice ? 'justify-between' : 'justify-end']">
        <!--benefitBadges is  in all items so i put the percentage of descound again (some one tell me that was in seesion)
        <span v-if="hotel.property.priceBreakdown.benefitBadges">{{ hotel.property.priceBreakdown.benefitBadges }}</span>
        -->
        <span class="text-white text-xs font-medium py-1 px-2 rounded bg-[#EB5757]" v-if="hotel.property.priceBreakdown.strikethroughPrice">Book now and receive {{ descondpersentage(hotel.property.priceBreakdown.strikethroughPrice.value,hotel.property.priceBreakdown.grossPrice.value) }}% off</span>
        <div class="text-black flex flex-col items-end">
            <span class="text-white text-xs font-medium py-1 px-2 rounded bg-[#219653] mb-7" v-if="hotel.property.priceBreakdown.strikethroughPrice">{{ descondpersentage(hotel.property.priceBreakdown.strikethroughPrice.value,hotel.property.priceBreakdown.grossPrice.value) }}% off</span>
            <div class="flex mb-1.5 items-center">
                <p class="text-[#EB5757] text-sm font-medium line-through mr-2" v-if="hotel.property.priceBreakdown.strikethroughPrice">$ {{ Math.round(hotel.property.priceBreakdown.strikethroughPrice.value) }}</p>
                <p class="text-xl font-medium">$ {{ Math.round(hotel.property.priceBreakdown.grossPrice.value) }}</p>
            </div>
            <p class="text-sm font-light py-2">Includes taxes and fees</p>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { usebooking } from '@/stores/booking';
import { storeToRefs } from 'pinia';

export default {
    setup(){
        const rate = ref(null)
        const intrate = ref(null)
        const doublerate = ref(null)
        const booking = usebooking()
        //const hotels = storeToRefs(booking.hotels)
        const hotels = computed(()=>booking.hotels)

        function descondpersentage(p1,p2){
            return Math.round((p1 - p2) / p1 * 100)
        }

        function calcrate(r){
            rate.value = Math.round(r)/2
            if(rate.value%2!=0){
                let str=rate.value.toString();
                let numarray=str.split('.'); 
                intrate.value = Number(numarray[0])
                doublerate.value = numarray[1]
                return str
            }
            else{
                intrate.value = rate.value
                return rate.value
            }
        }

        return { descondpersentage,intrate,doublerate,calcrate,booking }
    }
}
</script>