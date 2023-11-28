<template>
  <section class="flex flex-col w-[1240px] mx-auto mb-16">
    <div class="mb-8">
        <h2  class="text-primary-black text-3xl	font-semibold mb-4">Enjoy your dream vacation</h2>
        <p class="w-[610px] font-normal	text-base leading-6 tracking-wide">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
    </div>
    <smallcard :data="dreamvacations"/>
  </section>
</template>

<script>
import { ref } from 'vue';
import smallcard from '../repetativ component/smallcard.vue';
export default {
    components:{smallcard},
    setup(){
        const dreamvacations = ref([
            {
                /*i write img :'../../assets/imagename.png but it didn't show 
                even path correct and it shown without using bind so i use online link 
                vue bind on local link and add randum number every time !
                i traid to use impoet.meta.glob put it return glob in not a function error*/
                img:"https://s3-alpha-sig.figma.com/img/69df/f285/a7422c6a633bfef99d433a171722b018?Expires=1701648000&Signature=BLHSW2yXq319HSLSCiC9dQqaU-u6~GaYWM2GVaRI1cqSl9sRMxgpRDxdNLJBwVcgj~wKesnd6BjitkvLxVaNDLzqs81HUH1PYipuMAgYkyibVwWrkHzGDl8plQR89PlpgeetOK7SIcnJXa7Bu~qyy4NYTQfUVq16rEtc3VKg0XytXD9yna~fQ-7G6ZNbue2rmb1v~4wqrJeYCQICWaGxGtNEZXGtJTCHZml254Kd4Hti9ma5FdGlZ3Egfkw2-BKlqbjOTQIO5McoOc3xjsY00IJdsOs05E0Ms92OMtKUszerw5agLn30ALio2ef1COT3DyVMWtGJqag1v2O5d7I5KA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                name:'Australia',
                numproperties:'2246 properties'
            },
            {
                img:'https://s3-alpha-sig.figma.com/img/dd3d/907b/22070dc6b56b6e07bed3823c37b89f30?Expires=1701648000&Signature=M6D~Ll33psOHlVbReB9y81qMf6vuQgnoZumfTwTETHw5bGJg~2L~1xEwTcMfEXelj8fQJ97ImObQSGDBG0jT-ohosNvzp5XnGBZbJvLXTpGN2ZM1jl7zzXREUtrei-m~bbmKTNWKFXSV7Ox3-KHb2BmtR2xV7RbymlMRNDTePY5inHlo5l0~iKKGR6FF~v-WhVj~0gJHpxDyO~AiEBS0lSF00NZtyoV0ogYvGfECnYg1jos3BG7HBM1P5G5A36-p7LSer9fUzQN5oBJp7hDU3lZIHTsN7jqYEpSbqECfq-EA80fzWmYyYI4U-1cCVHl5Sa9GLjSUXR31KxNIFhBG5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                name:'Japan',
                numproperties:'1278 properties'
            },
            {
                img:'https://s3-alpha-sig.figma.com/img/1046/e3f1/52d5c751ccabb0e28e46ddd3404a7b92?Expires=1701648000&Signature=CKkPCf~JBseNo1uYR8ouLgc2oli-QB-eEogI~NS3gba~2BSXygHdqmXUbPryrEfsGn-QSLfL4p12R0n73PQDj7smVel3sziRIr0gAlTuKZUNc88cL4jJmYtROqIyq1hr-ZYfIilVIe6tLc63TUuNExJBRen1Ujx4F0LRI~~lnjsDIcuQIhdoSe4lxPVW9DiYcn7H9ajjVexeOv~VPTH4y6G9d7E2EWorXvTrc1ObBvJ-3EosDD4kRqfA6YBwMACqJGOj9ubj80DmAUXvzl4xVwqUBR7n0dFlC3gfSGu1yDrDTmpKANPxEek4KPQFMxizK3K4Rp58bjT5jfuLB~kpgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                name:'New Zealand',
                numproperties:'480 properties'
            },
            {
                img:'https://s3-alpha-sig.figma.com/img/7982/f510/f73630bd7cb4fcd79d670100bd5cead7?Expires=1701648000&Signature=WjcIiHanTfiMnvHGTSTYNLgT3lVNybMZVEXT~ZUhvyv9iZb7FR8hauooOd~kr~t3vphiFCxa~Bao1N8hdV52D~G~vjGm3Q5aVVaD1cvE-Uucx8xM2xi1tQPOD-rhgyt69PLU45l68FLgWHCFcu60PuDVc5xQa5VjiZuBGUR6~nzs6Gn-ZXItA6u9O-r6gardUB4BDn7g8r9w0V6EbYxr122gLmEkzd5Op61k7QS2anI2lkWjsBKuXZBOf9WHnMEf8Rt9CbZRCxZkBOB~WWZA-JoQValMek2IDYGLLnRyPYIA5WDcfbyCZUYuU-D3cICfcwZpFMLj-cNLP8vgVZit7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                name:'Greece',
                numproperties:'320 properties'
            },
        ])
        return { dreamvacations }
    }
}
</script>