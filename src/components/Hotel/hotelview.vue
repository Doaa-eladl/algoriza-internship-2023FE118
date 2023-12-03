<template>
    <section class="flex">
        <img :src="props.photos[0]" alt="hotel view" class="w-[840px] h-[452px] rounded-md">
        <div class="ml-5">
            <img :src="props.photos[1]"  alt="hotel view" class="w-[400px] h-[218px] rounded-md mb-4">
            <img :src="props.photos[2]"  alt="hotel view" class="w-[400px] h-[218px] rounded-md">
        </div>
    </section>
</template>

<script>
export default {
    props:['photos'],
    setup(props){
        return { props }
    }
}
</script>