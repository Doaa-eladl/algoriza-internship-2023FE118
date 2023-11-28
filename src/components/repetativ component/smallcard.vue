<template>
    <div class="grid grid-cols-4 gap-5">
        <div  v-for="instancedata in data" :key="instancedata.name" class="flex flex-col  text-primary-black">
            <img :src="instancedata.img" alt="dream vacation" class="mb-3.5 h-[220px] w-[295px] rounded-lg	">
            <h3 class="text-xl font-semibold mb-1.5">{{ instancedata.name }}</h3>
            <p class="text-sm font-normal ">{{ instancedata.numproperties }}</p>
        </div>
  </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>