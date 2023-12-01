<template>
  <div class="rounded-md bg-white">
    <img src="../../assets/room.png" alt="room" class="w-[400px] h-[200px] mb-5 rounded-t-md">
    <div class="ml-5 pb-6 flex flex-col">
        <h3 class="mb-4 text-[#1A1A1A] text-lg font-medium">Standard twin ben, Multiple beds</h3>
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
                <p>1 double bed and 1 twin bed</p>
            </li>
        </ul>
        <router-link :to="{ name: 'booking' }" class="btn w-[349px] mr-5 text-center">Reserve suite</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>