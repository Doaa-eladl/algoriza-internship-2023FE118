<template>
    <div class="flex bg-white w-[1030px] h-[64px] rounded-lg mx-auto border-2 shadow-lg py-2.5 px-3">
        <form @submit.prevent="$emit('search',destination,Checkindate,Checkoutdate,Guests,Rooms)" class="flex">
            <div class="flex p-3 bg-light-gray rounded mr-3.5 justify-center items-end">
                <img src="../../assets/location2.png" alt="location" class="mr-2.5">
                <select name="location" id="location" class="bg-light-gray focus:outline-none" style="color:gray;" v-model="destination" required>
                    <option value="null" disabled hidden selected>Where are you going?</option>
                    <option v-for="city in data" :key="city.dest_id" :value="city.dest_id" style="text-align: center; background-color: white;" class="text-gray">{{ city.city_name }}</option>
                </select>
            </div>
            <div class="flex p-3 bg-light-gray rounded mr-3.5 w-[160px] truncate">
                <img src="../../assets/calendar.png" alt="calender" class="mr-2.5">
                <input type="text" name="Checkindate" id="Checkindate" placeholder="Check in date" onfocus="(this.type='date')" class="mr-3 bg-light-gray focus:outline-none" v-model="Checkindate" required>
            </div>
            <div class="flex p-3 bg-light-gray rounded mr-3.5 w-[160px] truncate">
                <img src="../../assets/calendar.png" alt="calender" class="mr-2.5">
                <input type="text" name="Checkoutdate" id="Checkoutdate" placeholder="Check out date" onfocus="(this.type='date')" class="bg-light-gray focus:outline-none" v-model="Checkoutdate" required>
            </div>
            <div class="flex p-3 bg-light-gray rounded mr-3.5 w-[148px] truncate">
                <img src="../../assets/user-square.png" alt="user" class="mr-2.5">
                <input type="number" name="Guests" id="Guests" placeholder="Guests" class="bg-light-gray focus:outline-none" v-model="Guests" required>
            </div>
            <div class="flex p-3 bg-light-gray rounded mr-3.5 w-[160px] truncate">
                <img src="../../assets/single_bed.png" alt="single bed" class="mr-2.5">
                <input type="number" name="rooms" id="rooms" placeholder="Rooms" class=" bg-light-gray focus:outline-none" v-model="Rooms" required>
            </div>
            <div class="flex">
                <button class="btn flex items-center">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref, defineEmits } from 'vue';
import { usebooking } from '@/stores/booking';

export default {
    setup(){
        defineEmits(['search'])

        const booking = usebooking()
        
        const destination = ref(booking.searchvalobj.destination)
        const Checkindate = ref(booking.searchvalobj.checkindate)
        const Checkoutdate = ref(booking.searchvalobj.checkoutdate)
        const Guests = ref(booking.searchvalobj.guests)
        const Rooms = ref(booking.searchvalobj.rooms)

        let data = ref(null)

        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
            params: {query: 'egypt'},
            headers: {
    'X-RapidAPI-Key': 'ffac61851dmsh5475f6ae241a8a8p16a7bajsn0070881a46cf',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        onMounted(async()=>{
            data.value = await booking.getdestinations(options)
        })

        return { destination , Checkindate , Checkoutdate , Guests , Rooms , data }
    }
}
</script>