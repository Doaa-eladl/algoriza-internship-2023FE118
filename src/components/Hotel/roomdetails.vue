<template>
    <!--مفيش غير عدد الغرف الي راجع وداتا لغرفه واحده عشان كده الداتا متشابهه لكن العدد مختلف-->
  <div class="rounded-md bg-white" v-for="room in props.availablerooms[0]" :key="room">
    <img :src="props.availablerooms[1]" alt="room" class="w-[400px] h-[200px] mb-5 rounded-t-md">
    <div class="ml-5 pb-6 flex flex-col">
        <h3 class="mb-4 text-[#1A1A1A] text-lg font-medium">{{ props.availablerooms[2] }}</h3>
        <ul class="mb-6">
            <li class="flex mb-2.5 font-normal text-sm text-dark-gray">
                <img src="../../assets/bag-tick-2.png" alt="bag tick" class="mr-3">
                <p>300 sq ft</p>
            </li>
            <li class="flex mb-2.5 font-normal text-sm text-dark-gray">
                <img src="../../assets/lifebuoy2.png" alt="lifebuoy" class="mr-3">
                <p>Sleeps 3</p>
            </li>
            <li class="flex font-normal text-sm text-dark-gray">
                <img src="../../assets/like-2.png" alt="like" class="mr-3">
                <p>{{ props.availablerooms[2] }}</p>
            </li>
        </ul>
        <router-link :to="{ name: 'booking' ,
            query: { 
                intrate: route.query.intrate,
                doublerate: route.query.doublerate,
                hotelname: route.query.hotelname,
                hotelimg: route.query.hotelimg,
                price: route.query.price,
                reviewnum: route.query.reviewnum,
                roomdescription: props.availablerooms[2]
            } }"
        class="btn w-[349px] mr-5 text-center">Reserve suite</router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    props:['availablerooms'],
    setup(props){
        const route = useRoute()
        return { props , route }
    }
}
</script>