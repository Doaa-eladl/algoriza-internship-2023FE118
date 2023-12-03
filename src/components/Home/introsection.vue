<template>
  <section class="flex justify-center items-center relative mt-3 w-[1240px] mx-auto">
    <img src="../../assets/Rectangle 2.png" alt="nile view"  class="mx-auto">
    <div class="absolute flex flex-col items-center text-white text-center">
        <h1 class="text-3xl	font-bold">Enjoy Your Dream Vacation</h1>
        <p class="w-3/4 mt-5 font-normal text-xl leading-7">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
    </div>
    <searchbar class="absolute bottom-[-30px]" @search="search"/>
  </section>
</template>

<script>
import Searchbar from '@/components/repetativ component/searchbar.vue';
import { usebooking } from '@/stores/booking';
import { useRouter } from 'vue-router';

export default {
  components: {
    Searchbar
  },
  setup(){
    const booking = usebooking()
    const router = useRouter()

    function validatesearch(destination,Checkindate,Checkoutdate,Guests,Rooms){
      //validation
      //already put required in input and selection tag
      if(destination==null){
        alert('choose destination!!')
        return 0
      }
      var today = new Date();
      if(new Date(Checkindate) < today ){
        alert('check in date start at least from today')
        return 0
      }
      if(new Date(Checkoutdate) <= today ){
        alert('check out date start at least from tomorro')
        return 0
      }
      if(new Date(Checkoutdate) <= new Date(Checkindate) ){
        alert("envalid checkout date")
        return 0
      }
      if(new Date(Checkoutdate) == new Date(Checkindate) ){
        alert("you can't choose check in date equal to chek out date")
        return 0
      }
      if(Guests==0){
        alert("we can't search for reserve 0 gest")
        return 0
      }
      if(Rooms==0){
        alert("we can't search for reserve 0 room")
        return 0
      }
      return 1
    }
    function search(destination,Checkindate,Checkoutdate,Guests,Rooms){
      if(validatesearch(destination,Checkindate,Checkoutdate,Guests,Rooms)){
        booking.setsearchval(destination,Checkindate,Checkoutdate,Guests,Rooms)
        //const duration = new Date(Checkoutdate.value).getDate() - new Date(Checkindate.value).getDate()
        //authorization
        if(booking.isAuth==false){
          router.push({
            name: "login"
          })
        }
        else if(booking.isAuth){
          router.push({
            name: "resultpage"
          })
        }
      }
    }
    return { search }
  }
}
</script>