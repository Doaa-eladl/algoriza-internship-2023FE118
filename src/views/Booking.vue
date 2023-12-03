<template>
  <main class="bg-light-gray pb-20">
    <section class="w-[1240px] mx-auto">
        <h1 class="mb-7 pt-16 text-zinc-900 font-semibold text-3xl">Secure your reservation</h1>
        <covedcheck class="mb-8"/>
    </section>
    <article class="flex  justify-center	">
      <section>
        <!--<bookingform ref="fname"/>-->
        <!--مكنتش عارفه ازاي اربط ايفنت زارا ف كومبونينت ب فورم ف كومبونينت تانيه عشان اعمل فليديشن 
        و دورت ملقيتش او معرفتش اظبطها بال 
        ref
        ف هحط الفورم هنا انا عارفه ان الافضل نقسم الكود كومبونينتس
      -->
        <section>
          
  <div class="bg-white rounded-md	mb-8">
      <div class="bg-light-blue px-5 py-4 flex rounded-t-md font-medium text-white items-center">
        <img src="../assets/security-user 1.png" alt="security user" class="mr-4">
        <p class="mr-5 text-lg">Room 1</p>
        <p class="text-base">{{ booking.searchvalobj.guests }} adults, {{ route.query.roomdescription }}, Non-smoking</p>
      </div>
      <form class="p-8">
        <div class="flex mb-5">
          <div class="flex flex-col mr-5 rounded">
            <label for="fname" class="text-sm font-medium text-primary-black">First Name</label>
            <!--bind on place holder with user name-->
            <input type="text" name="fname" id="fname" placeholder="Doaa"
             class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5 focus:outline-none"
             v-model="fname">
          </div>
          <div class="flex flex-col mr-5 rounded">
            <label for="lname" class="text-sm font-medium text-primary-black">Last Name</label>
            <!--bind on place holder with user name-->
            <input type="text" name="lname" id="lname" placeholder="Eladl"
             class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5 focus:outline-none"
             v-model="lname">
          </div>  
        </div>
        <div>
          <label for="mobile" class="text-sm font-medium text-primary-black">Mobile Number</label>
          <selectcountry class="mt-1"/>
        </div>
        <div class="mt-5 flex items-normal">
          <input type="checkbox" name="textalert" id="textalert" class="mr-2 w-[20px] h-[20px] border-2 border-[#F2F2F2] pl-2.5">
          <label for="textalert" class="text-sm font-normal text-[#333]">Receive text alerts about this trip.</label>
        </div>
      </form>
  </div>
  <div class="bg-white rounded-md	mb-8">
    <div class="bg-light-blue px-5 py-4 flex rounded-t-md font-medium text-white items-center">
      <img src="../assets/card-tick 1.png" alt="card tick" class="mr-4">
      <p class="mr-5 text-lg">Payment options</p>
    </div>
    <div class="pl-8 pt-2 border-b-2 border-[#E0E0E0]">
      <p class="text-sm font-normal text-[#333] border-b-4 border-light-blue w-[137px] h-[37px] mt-2.5 px-3.5">Debit/Credit Card</p>
    </div>
    <div class="mt-8 ml-8 pb-7 flex">
      <img src="../assets/image 6.png" alt="creadet card type1" class="p-2 rounded-md bg-light-gray mr-1.5 w-[60px] h-[40px]">
      <img src="../assets/image 7.png" alt="creadet card type2" class="p-2 rounded-md bg-light-gray mr-1.5 w-[42.9px] h-[24px] w-[60px] h-[40px]">
      <img src="../assets/image 10.png" alt="creadet card type3" class="p-2 rounded-md bg-light-gray mr-1.5 w-[60px] h-[40px]">
      <img src="../assets/image 8.png" alt="creadet card type4" class="p-2 rounded-md bg-light-gray w-[60px] h-[40px]">
    </div>
    <form>
      <div class="flex flex-col ml-8 mb-5">
        <label for="cardname" class="text-sm font-medium text-primary-black">Name on card</label>
        <input type="text" name="cardname" id="cardname"
         placeholder="Doaa Eladl"
          class="w-[500px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5 focus:outline-none"
          v-model="nameoncard">
      </div>
      <div class="flex flex-col ml-8 mb-5">
        <label for="cardnumber" class="text-sm font-medium text-primary-black">Debit/Credit card number</label>
        <input type="number" name="cardnumber"
         id="cardnumber" placeholder="9923464374822293"
          class="w-[500px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5 focus:outline-none"
          v-model="cardnumber">
      </div>
      <div class="flex flex-col ml-8 mb-5">
        <label for="ExpirationDate" class="text-sm font-medium text-primary-black">Expiration Date</label>
        <div>
          <select v-model="expiremonth" class="w-[150px] h-[42px] bg-[#F2F2F2] mt-1 h-[44px] rounded mr-3 pl-2.5">
            <option value="null" disabled hidden selected>Janaury</option>
            <option value='1'>Janaury</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option selected value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
          <select v-model="expireyear" class="w-[150px] h-[42px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
            <option value="null" disabled hidden selected>2023</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option selected value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
          </select>
        </div>
      </div>

      <div class="flex ml-8 pb-10">
          <div class="flex flex-col mr-5 rounded">
            <label for="SecurityCode" class="text-sm font-medium text-primary-black">Security Code</label>
            <input type="text" name="SecurityCode"
             id="SecurityCode" placeholder="543"
              class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5"
              v-model="SecurityCode">
          </div>
          <div class="flex flex-col mr-5 rounded">
            <label for="Zipcode" class="text-sm font-medium text-primary-black">Billing Zip code</label>
            <input type="text" name="Zipcode"
             id="Zipcode" placeholder="203846"
              class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5"
              v-model="Zipcode">
          </div>  
        </div>
    </form>
  </div>
        </section>
        <bookinginfo  @openmodel="openmodel"/>
      </section>
      <section class="flex flex-col items-center ml-8">
        <bookingroom />
        <pricedetails />
      </section>
    </article>
  <base-modal :btncontent="'View Trip'" @close="showmodal=false" :showmodal="showmodal" v-if="showmodal">
    <img src="../assets/baid.png" alt="Booking Successful" class="w-[240px] h-[200px] my-12">
    <h2 class="text-xl font-semibold text-primary-black mb-3">Booking Successful</h2>
    <p class="text-base font-normal text-dark-gray mb-11">Congratulations your reservation has been made. You will be notified 2 days prior the date.</p>
  </base-modal>
 </main>
</template>

<script>
import covedcheck from '@/components/repetativ component/covedcheck.vue'
import Bookingroom from '@/components/Booking/bookingroom.vue'
import Pricedetails from '@/components/Booking/pricedetails.vue'
import Bookinginfo from '@/components/Booking/bookinginfo.vue'
import Bookingform from '@/components/Booking/bookingform.vue'
import BaseModal from '@/components/BaseModal.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { usebooking } from '@/stores/booking';
import selectcountry from '../components/Booking/selectcountry.vue';

export default {
    components: { selectcountry,covedcheck, Bookingroom, Pricedetails, Bookinginfo, Bookingform, BaseModal },

    setup(){
      let showmodal = ref(null)
      const booking = usebooking()
      const route = useRoute()
      const fname = ref('')
      const lname = ref('')
      const nameoncard = ref('')
      const cardnumber = ref([])
      const expiremonth = ref(null)
      const expireyear = ref(null)
      const SecurityCode = ref([])
      const Zipcode = ref([])

      function openmodel(){
        //check first all input were
        if(fname.value==''){
          alert('enter first name')
          return 0
        }
        if(lname.value==''){
          alert('enter last name')
          return 0
        }
        if(nameoncard.value==''){
          alert('enter name on card')
          return 0
        }
        if(cardnumber.value.length<12){
          alert('enter correct card number')
          return 0
        }
        if(expiremonth.value==null){
          alert('choose expire month')
          return 0
        }
        if(expireyear.value==null){
          alert('choose expire year')
          return 0
        }
        if(SecurityCode.value.length<3){
          alert('enter correct Security Code')
          return 0
        }
        if(Zipcode.value.length<6){
          alert('enter correct Zip code')
          return 0
        }
        else{
          booking.addtomytrips({
            hotelname: route.query.hotelname,
            imgsrc:route.query.hotelimg,
            price: route.query.price,
            reviewnum: route.query.reviewnum,
            intrate: route.query.intrate,
            doublerate: route.query.doublerate,
          })
          showmodal.value = true
        }
      }
      return { openmodel , showmodal , booking , route , fname , lname , nameoncard , cardnumber , expiremonth ,expireyear , SecurityCode ,Zipcode}
    }
}
</script>