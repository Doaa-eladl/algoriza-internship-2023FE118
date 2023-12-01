<template>
  <div class="w-[810px] rounded-md bg-white">
    <div class="bg-[#F2C94C] py-5 pl-5 rounded-t-md">
        <h3 class="text-base font-medium">Important information about your booking</h3>
    </div>
    <div class="py-8 pr-6 pl-6">
        <ol class="list-decimal mb-8 pl-4">
            <li class="font-normal text-base text-[#333]">This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</li>
            <li class="font-normal text-base text-[#333]">Stay extensions will require a new reservation.</li>
            <li class="font-normal text-base text-[#333]">Front desk staff will greet guests on arrival</li>
            <li class="font-normal text-base text-[#333]">No refunds will be issued for late check-in or early check-out.</li>
        </ol>
        <p class="font-normal text-base text-dark-gray mb-6">By clicking the button below, I acknowledge that I have reviewed the <span class="text-light-blue">Privacy Statement</span> and have reviewd and accept the <span class="text-light-blue">Rules and Restrictions</span> and <span class="text-light-blue">Terms of Use</span>.</p>
        <button class="btn" @click="$emit('openmodel')">Complete Booking</button>
        <div class="flex mt-5">
            <img src="../../assets/lock-circle 1.png" alt="lock circle" class="mr-2">
            <p class="font-normal text-base text-dark-gray">We use secure transmission and encrypted storage to protect your personal information</p>
        </div>
    </div>
  </div>
</template>

<script>
import { defineEmits } from 'vue'

export default {
setup(){
  defineEmits(['openmodel'])

  return { }
}
}
</script>