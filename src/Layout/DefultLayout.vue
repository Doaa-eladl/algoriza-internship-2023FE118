<template>
    <Theheader />
    <router-view/>
    <Thefooter />
</template>

<script>
import Thefooter from '@/components/Thefooter.vue';
import Theheader from '@/components/Theheader.vue';
export default {
  components: {
    Theheader,
    Thefooter
}
}
</script>