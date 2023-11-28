<template>
  <div class="bg-white w-[1030px] h-[240px] rounded	mx-auto p-5 flex justify-between mb-6">
    <div class="flex">
      <div class="mr-6">
        <img src="" alt="" class="w-[285px] h-[200px] rounded	">
      </div>
      <div>
        <h2 class="text-zinc-900 text-xl font-medium mb-1.5">Lakeside Motel Warefront</h2>
        <div class="flex mb-8">
          <div class="flex mr-3">
            <img src="../../assets/star-s-fill 1.png" alt="">
            <img src="../../assets/star-s-fill 1.png" alt="">
            <img src="../../assets/star-s-fill 1.png" alt="">
            <img src="../../assets/star-s-fill 1.png" alt="">
            <img src="../../assets/star-s-fill 5.png" alt="">
          </div>
          <p class="font-normal text-sm	text-dark-gray">4.5 (1200 Reviews)</p>
        </div>
        <div class="grid grid-rows-4 gap-y-2 font-normal text-sm text-dark-gray">
          <p class="text-red-500">Non refundable</p>
          <p>Check in: Sunday, March 18, 2022</p>
          <p>Check out: Tuesday, March 20, 2022</p>
          <p>2 night stay</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end items-end">
      <p class="text-zinc-900 text-xl font-medium mb-1.5"><span class="font-normal text-sm text-red-500">$150</span>$130</p>
      <p class="font-normal text-sm text-dark-gray mb-4">Includes taxes and fees</p>
      <router-link :to="{ name : 'hotel'}" class="btn">Includes taxes and fees</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>