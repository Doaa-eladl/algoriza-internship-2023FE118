<template>
    <section class="flex flex-col w-[1240px] mx-auto mb-16">
      <div class="mb-6">
          <h2  class="text-primary-black text-3xl font-semibold">Get inspiration for your next trip</h2>
      </div>
      <nexttripcard :nexttrips="nexttrips"/>
    </section>
</template>

<script>
import { ref } from 'vue';
import nexttripcard from './nexttripcard.vue'
export default {
  components: { nexttripcard },
  setup(){
        const nexttrips = ref([
            {
                /*i write img :'../../assets/imagename.png but it didn't show 
                even path correct and it shown without using bind so i use online link 
                vue bind on local link and add randum number every time !
                i traid to use impoet.meta.glob put it return glob in not a function error*/
                src:"https://s3-alpha-sig.figma.com/img/16a7/0720/741b1a33582ccbea66b737743968602d?Expires=1701648000&Signature=g4D2kc9poayNpBsAK~vJNPpuyakNzHp9tb96FTYH1YBC~cspaDS1Pz9IVYb1GhaRa2Oo2e0z5RooJuBHfKENkb6e10MKGmMGtWx7hTYVwhfGfFjUP3OHrZNOiUqfcMThQWcSrJpQkCwv3ER7078x~nHRC607B~zf0LDvwCnkHgbrRjC-LEuBQ02xpK6~3dvUnRgt2Tlx3XOegll-FS9QukCkoTagzQNNS27OSW7AniMT1H4CqzYd6JEqoAvrEX-4Se7u3sIr-ytfPZI9LTwK1q~16sznLyLTuR73IbZ-Yk413-aCjVdgy9ol3HD2up41HC1CO1y9zUVoA-bci8YUEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                pref:'Sydeny’s 10 most fashionable 5 star hotels',
                details:'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....'
            },
            {
                src:"https://s3-alpha-sig.figma.com/img/6390/7bbf/e1389fbfd0626d0dbbf233f324dc4d3c?Expires=1701648000&Signature=mtmIt6Y0z1mNTX0wOrGtqN-1O48LUo5p0qOg8wAS2rXtr2cne1Nqs5knYvyqFL57dK6ejZXrYJT470Dm-3q~duOUrZlcPcwatRVdOa0ibG0mYOAWjbIT5RgPWLXJnLPmxEBOKKk9qzI2ISLcPejfqbujI2yyP1coW~AK4jXUNy-Ei22-z~fakuLDkIbKpNALRQh8bywkMjnyugRdMjJJtZoIRRycDvQgYZz4QSVdocWwgKd-O2Y35f~n~HXrVzyhZlugAIpBe2DhUSrafTSeV~udeBsGM~5HDqqRRvlSCUofM4i1mbOcPhpkHzSTRhB3ZNfwglHZf2ub4LhjF007~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                pref:'Top cities for Vegan Travellers',
                details:'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...'
            },
            {
                src:"https://s3-alpha-sig.figma.com/img/5792/a4d6/add7dcaab1b06c4f605d4b8c5d5a707f?Expires=1701648000&Signature=izMRRz2wsDMxdoZ~a3S2B~fB0PR53QhtrzfHfTXlH7K4WAj33Ar4Bt4B8iN0~pWo~gF-JJatsokf~fHUMLI0gl00I84MKynxm8mruv81siaYD1l-Y0Y0gR35X4IaMuhn3JuM5vK-RpNeeuUG-qjlAJrpBJRUwhN0-WrmTJLmvfyASZXeLbgJTu4LLQk3LgjvbUpP95QQncpbYDDGU7JRdyQPc-YTQlIEJnYj0Edqs~E-JxYLy3-tYQpDdMFypPkvZcFzhPn6Id1j5mGzREIFmVI9UkRpjwmlvTFxC31p9FqLUvASPJX4XHArkOkJ8yWN-ULgjN8~6vvNJC2tg7qa3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                pref:'World’s top destinations during and post covid timeline',
                details:'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...'
            },
        ])
        return { nexttrips }
    }
}
</script>