<template>  
  <introsection />
  <covedcheck class="mt-20  pb-12"/>
  <dreamvacationsection />
  <inspirenexttripsection />
  <popularhotelssection />
  <mobileappsection />
  <exploarmore />
</template>

<script>
import Introsection from '@/components/Home/introsection.vue'
import Covedcheck from '@/components/repetativ component/covedcheck.vue'
import dreamvacationsection from '@/components/Home/dreamvacationsection.vue';
import Inspirenexttripsection from '@/components/Home/inspirenexttripsection.vue';
import Popularhotelssection from '@/components/Home/popularhotelssection.vue';
import Mobileappsection from '@/components/Home/mobileappsection.vue';
import Exploarmore from '@/components/Home/exploarmore.vue';

export default {
  components: {
    Introsection,
    Covedcheck,
    dreamvacationsection,
    Inspirenexttripsection,
    Popularhotelssection,
    Mobileappsection,
    Exploarmore
  }
}
</script>
