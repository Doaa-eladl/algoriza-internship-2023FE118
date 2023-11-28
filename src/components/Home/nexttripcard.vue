<template>
    <div class="grid grid-cols-3 gap-5">
        <div  v-for="nexttrip in nexttrips" :key="nexttrip.pref" class="flex flex-col relative text-white items-start justify-end">
            <img :src="nexttrip.src" alt="dream vacation" class=" rounded-lg h-[280px]">
            <div class="absolute ml-5 mb-5 w-[360px]">
                <h3 class="mb-2.5 text-xl font-semibold">{{ nexttrip.pref }}</h3>
                <p class="font-normal text-base leading-6 tracking-wide">{{ nexttrip.details }}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: ['nexttrips'],
}
</script>