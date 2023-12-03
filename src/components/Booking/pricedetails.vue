<template>
  <div class="w-[400px] rounded-md bg-white">
    <div class="bg-[#85E0AB] py-5 pl-5 rounded-t-md">
        <h3 class="text-base font-medium">Price Details</h3>
    </div>
    <div class="py-5 px-4 border-b">
        <div class="flex justify-between mb-4">
            <p>1 room X 2 nights</p>
            <span>$ {{ Math.round(route.query.price) }}</span>
        </div>
        <div class="flex justify-between">
            <p>Tax and service fees</p>
            <span>$ 8.32</span>
        </div>
    </div>
    <div class="py-5 px-4 flex justify-between">
        <p>Total</p>
        <span>${{ Math.round(Number(route.query.price) - 8.32) }}</span>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    setup(){
        const route = useRoute()
        return { route }
    }
}
</script>