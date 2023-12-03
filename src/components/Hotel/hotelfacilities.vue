<template>
  <section>
    <div>
        <h2 class="text-[#1A1A1A] font-semibold text-3xl mb-3">{{ props.hoteldata[0] }}</h2>
        <div class="flex mb-3">
            <div class="flex mr-3">
                <img src="../../assets/star-s-fill 1.png" alt="star rate" v-for="i in Number(route.query.intrate)" :key="i">
                <img src="../../assets/star-s-fill 5.png" alt="half star rate" v-if="route.query.doublerate>0">
            </div>
            <p class="font-normal text-sm	text-dark-gray">{{ route.query.intrate }}<span v-if="route.query.doublerate>0">.{{ route.query.doublerate }}</span> ({{ props.hoteldata[1] }} Reviews)</p>
        </div>
        <div class="flex mb-8">
            <img src="../../assets/location 1.png" alt="location" class="mr-1.5">
            <p class="text-sm text-[#333] font-normal">{{ props.hoteldata[2] }}</p>
        </div>
    </div>
    <section>
        <section class="bg-white pt-6 pl-8 pb-11 rounded-t-md border-b-2 ">
            <h3 class="text-primary-black text-lg font-medium mb-5">Overview</h3>
            <div class="flex flex-col justify-between mr-10">
                <p class="text-dark-gray text-base font-normal mb-2">{{ des1 }}</p>
                <p class="text-dark-gray text-base font-normal"> {{ des2 }}</p>
            </div>
        </section>
        <section class="bg-white pt-6 pl-8 pb-11 mb-11 rounded-b-md">
            <h3 class="text-primary-black text-lg font-medium mb-6">Top facilities</h3>
            <div class="flex">
                <ul class="mr-28 grid grid-cols-2">
                    <li class="flex mb-3 font-normal text-sm text-dark-gray" v-for="facitily in props.facilities" :key="facitily">
                        <img src="../../assets/home-wifi 1.png" alt="home wifi" class="mr-3">
                        <p>{{ facitily.name }}</p>
                    </li>
                    <!--الجزء الي معموله كومنت كان استاتيك بس الايكون ظابطه زي فيجما لكن بال 
                    api 
                    عملت لوب فالايكون مش موجوده فال
                    api اصلا
                    -->
                    <!--<li class="flex mb-3 font-normal text-sm text-dark-gray">
                        <img src="../../assets/wind 1.png" alt="wind" class="mr-3">
                        <p>Air Conditioning</p>
                    </li>
                    <li class="flex font-normal text-sm text-dark-gray">
                        <img src="../../assets/car 1.png" alt="car" class="mr-3">
                        <p>Parking available</p>
                    </li>-->
                </ul>
                <!--<ul>
                    <li class="flex mb-3 font-normal text-sm text-dark-gray">
                        <img src="../../assets/bag-tick-2 1.png" alt="bag tick" class="mr-3">
                        <p>Business Services</p>
                    </li>
                    <li class="flex mb-3 font-normal text-sm text-dark-gray">
                        <img src="../../assets/lifebuoy 1.png" alt="lifebuoy" class="mr-3">
                        <p>Swimming pool</p>
                    </li>
                    <li class="flex font-normal text-sm text-dark-gray">
                        <img src="../../assets/like-1 1.png" alt="like" class="mr-3">
                        <p>Top rated in area</p>
                    </li>
                </ul>-->
            </div>
        </section>
    </section>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import { usebooking } from '@/stores/booking'
import { useRoute } from 'vue-router'
export default {
    props:['hotelid','hoteldata','facilities'],
    setup(props){
        const data = ref([])
        const des1 = ref(null)
        const des2 = ref(null)

        const route = useRoute()
        const booking = usebooking()

        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo',
            params: {
                hotel_id: props.hotelid,
                languagecode: 'en-us'
            },
            headers: {
    'X-RapidAPI-Key': 'ffac61851dmsh5475f6ae241a8a8p16a7bajsn0070881a46cf',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        onMounted(async()=>{
            data.value = await booking.gethotelinfo(options)
            des1.value = data.value[0].description
            des2.value = data.value[1].description
        })
        return { des1 , des2 , props , route}
    }
}
</script>