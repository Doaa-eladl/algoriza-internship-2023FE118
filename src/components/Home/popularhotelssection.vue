<template>
    <section class="flex flex-col w-[1240px] mx-auto mb-16">
      <div class="mb-8">
          <h2  class="text-primary-black text-3xl	font-semibold mb-4">Popular hotels</h2>
      </div>
      <smallcard :data="hotels"/>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  import smallcard from '../repetativ component/smallcard.vue';
  export default {
      components:{smallcard},
      setup(){
        const hotels = ref([
              {
                /*i write img :'../../assets/imagename.png but it didn't show 
                even path correct and it shown without using bind so i use online link 
                vue bind on local link and add randum number every time !
                i traid to use impoet.meta.glob put it return glob in not a function error*/
                  img:'https://s3-alpha-sig.figma.com/img/bce4/6923/9fd793bdf7c58d302491fbb847a23511?Expires=1701648000&Signature=e52qHKio37~BuQk4SbA500WiYXHq~SiwM6p1igx~Ht63g3B-rl7~b5ImGLJ5s56hiP9G5UCreG04jIIxZaqN-7xHozPxdLFHkmi5bCXFl498j3H1Tw0YmyQImMJPbMPxfRop3FQCXm8ht1CtVwujPh0RsEFdejewgej1-5qXYRlFxxsJC~Um-f1eQKTmyXqVpGmmKfilczRfAyuAuqMOvL6ZdrUqsgzS~9jYeMXln4JWHQaXqLyyi~EmmTsjWocdHJxVGroELgY51VGNnsNQOEIVeFRA3J6U9Wx6ljx3RKMdz797ZI167hWePMy68O7whMKLj7A-vn78BAq4tNKQAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  name:'Lakeside Motel Warefront',
                  numproperties:'2246 properties'
              },
              {
                  img:'https://s3-alpha-sig.figma.com/img/1dc8/bf3a/97f234423706967327b0a8fc1d82081f?Expires=1701648000&Signature=PUxjBtXW50vDWUwMYDIl~D5h9Vbi~ArqFGgF6yuvfWt5ddO1E1e8hCHsz0DqC5Rs0JGhtV8viBTev9oa64envhO5Kcfxg0vAAUjNdV05xVxOFheb8vbo4WB7VafkH3F-sZVEcH92dOdL57rMOJX9~t40uz0SDvh1-8RbqRAFyJw4d1b3dxlQE8JvupX5eLxB0p5B0-jeemKdOV-IlZ82EtU95KHSDCX-2we-QOeiiu-x7szSztx-JgHeMfJEBZ7RJGECwavyBhZ~jrqImag9ffJmz8-KmL1f2qINQNlnyn22G-kBzEHGKN0hRx2OcXwrqnycN9DZmEFVKhdAnpKiUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  name:'Recce Graham resort',
                  numproperties:'1278 properties'
              },
              {
                  img:'https://s3-alpha-sig.figma.com/img/009f/1ff6/45eb78fa3838f074fac563e6f14e5bb1?Expires=1701648000&Signature=Tax5~AeSro0ykUiHim1b386YVDDRH20ukWMgyL82NvvKIkpMbEdQpXsc2lXVuIdtOtlkTLj1XpNtOwCrKTM1gRRciufwFxhjed49ITJcTTz3ykgb0PJDjdv9gj9ncVF7-vOmfMX~P4CNBk-40RNmGtfZKo930Jk5J0e3fCV1IBUmD7qssKFha0zyqLMdl89ryLwH6GSAGfYM4Za24BEgSJg9i43~HDtcH5eDe27ntEJCUUEpPDCqprZwfjcWDoS2dEyAq9qUUZg~kx5O4naluXCU~REPHovUsgyjx3iNL1nmqGbcz2edMkMf-cY0Vk~1IWMCpI9Qwytnp7P6eFq8DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  name:'Fireside Dinners',
                  numproperties:'480 properties'
              },
              {
                  img:'https://s3-alpha-sig.figma.com/img/b287/fb9d/73845d0e7dc924d9299658b292218a2d?Expires=1701648000&Signature=kDZB~TSz1CgY7E5Fl7JJJUlZnF9GXaWJQY99eVpgDy7DbO1dL-Ubmh~FLjgPizkiLXPo6Vywwu30ks7zHjrAz7l7YItgRiWrlIyxWTD-4-nMcMJ0Mezw46fcisJZVEanhgqk9s7nTyIUUgUdE8czWkWYA5okB-EDl5ETXlQlGKpBabkYjlMu3-EOyTeyzKptAwNVYwraE8q-DUmEYoNX6O03W57Z5gjA7Zi3POysrTrARwOrDmrPr4IyCfLUroPjIPT0sTY-8YIPL7OZk3RqunqOgBRh261NubQR7hmd~pYvnkXJmKneNJXEQzvdFodfujxd6qRCyMnV9nj3Wr4MwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  name:'Oculous Inn Stay',
                  numproperties:'320 properties'
              },
          ])
        return { hotels }
      }
  }
  </script>