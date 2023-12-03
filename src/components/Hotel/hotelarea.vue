<template>
  <section class="w-[400px] ml-8">
    <!--should bind src from api-->
    <iframe :src="`//maps.google.com/maps?q=${props.mapsrc[1]},${props.mapsrc[0]}&z=15&output=embed`" class="w-[400px] h-[240px] mb-9"></iframe>
    <h2 class="mb-5 text-primary-black text-lg font-medium">Explore the area</h2>
    <ul>
        <li class="flex justify-between mb-3 text-sm font-normal text-dark-gray">
            <div class="flex w-[300px]">
                <img src="../../assets/bxs-plane-alt 2.png" alt="plane" class="pr-2">
                <p>Hotel Penselvenyia</p>
            </div>
            <p>2 min drive</p>
        </li>
        <li class="flex justify-between mb-3 text-sm font-normal text-dark-gray">
            <div class="flex w-[300px]">
                <img src="../../assets/bxs-map 1.png" alt="plane" class="pr-2">
                <p>Travis Bakery store house</p>
            </div>
            <p>10 min drive</p>
        </li>
        <li class="flex justify-between mb-3 text-sm font-normal text-dark-gray">
            <div class="flex w-[300px]">
                <img src="../../assets/bxs-map 1.png" alt="plane" class="pr-2">
                <p>Olivia Johnson Garden</p>
            </div>
            <p>15 min drive</p>
        </li>
        <li class="flex justify-between mb-3 text-sm font-normal text-dark-gray">
            <div class="flex w-[300px]">
                <img src="../../assets/bxs-map 1.png" alt="plane" class="pr-2">
                <p>Norman Opera Circus</p>
            </div>
            <p>18 min drive</p>
        </li>
        <li class="flex justify-between text-sm font-normal text-dark-gray">
            <div class="flex w-[300px]">
                <img src="../../assets/bxs-map 1.png" alt="plane" class="pr-2">
                <p>Rockdeset hotel</p>
            </div>
            <p>32 min drive</p>
        </li>
    </ul>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    props:['mapsrc'],
    setup(props){
        let mapsrc = ref(null)
        onMounted(()=>{
            mapsrc.value = ref(`https//maps.google.com/maps?q='${props.mapsrc[1]}','${props.mapsrc[0]}'&z=15&output=embed`)

        })
        return { props , mapsrc }
    }
}
</script>