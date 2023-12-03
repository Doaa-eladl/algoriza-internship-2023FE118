<template>
  <div class="bg-white rounded-md	mb-8">
      <div class="bg-light-blue px-5 py-4 flex rounded-t-md font-medium text-white items-center">
        <img src="../../assets/security-user 1.png" alt="security user" class="mr-4">
        <p class="mr-5 text-lg">Room 1</p>
        <p class="text-base">{{ booking.searchvalobj.guests }} adults, {{ route.query.roomdescription }}, Non-smoking</p>
      </div>
      <form class="p-8">
        <div class="flex mb-5">
          <div class="flex flex-col mr-5 rounded">
            <label for="fname" class="text-sm font-medium text-primary-black">First Name</label>
            <!--bind on place holder with user name-->
            <input type="text" name="fname" id="fname" placeholder="Doaa"
             class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5"
             >
          </div>
          <div class="flex flex-col mr-5 rounded">
            <label for="lname" class="text-sm font-medium text-primary-black">Last Name</label>
            <!--bind on place holder with user name-->
            <input type="text" name="lname" id="lname" placeholder="" class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
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
      <img src="../../assets/card-tick 1.png" alt="card tick" class="mr-4">
      <p class="mr-5 text-lg">Payment options</p>
    </div>
    <div class="pl-8 pt-2 border-b-2 border-[#E0E0E0]">
      <p class="text-sm font-normal text-[#333] border-b-4 border-light-blue w-[137px] h-[37px] mt-2.5 px-3.5">Debit/Credit Card</p>
    </div>
    <div class="mt-8 ml-8 pb-7 flex">
      <img src="../../assets/image 6.png" alt="creadet card type1" class="p-2 rounded-md bg-light-gray mr-1.5 w-[60px] h-[40px]">
      <img src="../../assets/image 7.png" alt="creadet card type2" class="p-2 rounded-md bg-light-gray mr-1.5 w-[42.9px] h-[24px] w-[60px] h-[40px]">
      <img src="../../assets/image 10.png" alt="creadet card type3" class="p-2 rounded-md bg-light-gray mr-1.5 w-[60px] h-[40px]">
      <img src="../../assets/image 8.png" alt="creadet card type4" class="p-2 rounded-md bg-light-gray w-[60px] h-[40px]">
    </div>
    <form>
      <div class="flex flex-col ml-8 mb-5">
        <label for="cardname" class="text-sm font-medium text-primary-black">Name on card</label>
        <input type="text" name="cardname" id="cardname" placeholder="Julius Lorenzo" class="w-[500px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
      </div>
      <div class="flex flex-col ml-8 mb-5">
        <label for="cardnumber" class="text-sm font-medium text-primary-black">Debit/Credit card number</label>
        <input type="text" name="cardnumber" id="cardnumber" placeholder="9923464374822293" class="w-[500px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
      </div>
      <div class="flex flex-col ml-8 mb-5">
        <label for="ExpirationDate" class="text-sm font-medium text-primary-black">Expiration Date</label>
        <div>
          <select  class="w-[150px] h-[42px] bg-[#F2F2F2] mt-1 h-[44px] rounded mr-3 pl-2.5">
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
          <select  class="w-[150px] h-[42px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
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
            <input type="text" name="SecurityCode" id="SecurityCode" placeholder="543" class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
          </div>
          <div class="flex flex-col mr-5 rounded">
            <label for="Zipcode" class="text-sm font-medium text-primary-black">Billing Zip code</label>
            <input type="text" name="Zipcode" id="Zipcode" placeholder="203846" class="w-[240px] bg-[#F2F2F2] mt-1 h-[44px] rounded pl-2.5">
          </div>  
        </div>
    </form>
  </div>
</template>

<script>
import { usebooking } from '@/stores/booking';
import selectcountry from './selectcountry.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    selectcountry,
},
  setup(){
    const booking = usebooking()
    const route = useRoute()

    return { booking , route  }
  }
};
</script>