<template>
  <theheader />
  <router-view/>
</template>

<script>
import Theheader from '@/components/Theheader.vue';
export default {
  components: {
    Theheader
  }
}
</script>