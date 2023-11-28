<template>
  <main class="bg-light-gray">
    <section class="w-[1030px] mx-auto">
        <h1 class="mb-7 pt-16 text-zinc-900 font-semibold text-3xl">My trips</h1>
        <tripcard />
        <tripcard />
    </section>
  <covedcheck class="pb-20 mt-52"/>
 </main>
</template>

<script>
import covedcheck from '@/components/repetativ component/covedcheck.vue'
import Tripcard from '@/components/Mytrips/tripcard.vue'
export default {
  components: { covedcheck, Tripcard },
}
</script>