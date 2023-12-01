<template>
    <div class="flex bg-white w-[1030px] h-[64px] rounded-lg mx-auto border-2 shadow-lg py-2.5 px-3">
        <form @submit.prevent="search" class="flex">
            <div class="flex p-3 bg-light-gray rounded mr-3.5 justify-center items-end">
                <img src="../../assets/location2.png" alt="location" class="mr-2.5">
                <select name="location" id="location" class="bg-light-gray focus:outline-none" style="color:gray;" v-model="destination" required>
                    <option value="null" disabled hidden selected>Where are you going?</option>
                    <option value="-2092174">cairo</option>
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
                <input type="text" name="Guests" id="Guests" placeholder="Guests" class="bg-light-gray focus:outline-none" v-model="Guests" required>
            </div>
            <div class="flex p-3 bg-light-gray rounded mr-3.5 w-[160px] truncate">
                <img src="../../assets/single_bed.png" alt="single bed" class="mr-2.5">
                <input type="text" name="rooms" id="rooms" placeholder="Rooms" class=" bg-light-gray focus:outline-none" v-model="Rooms" required>
            </div>
            <div class="flex">
                <button class="btn flex items-center">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { usebooking } from '@/stores/booking';

export default {
    setup(){

        const booking = usebooking()
        
        const destination = ref(booking.searchvalobj.destination)
        const Checkindate = ref(booking.searchvalobj.checkindate)
        const Checkoutdate = ref(booking.searchvalobj.checkoutdate)
        const Guests = ref(booking.searchvalobj.guests)
        const Rooms = ref(booking.searchvalobj.rooms)

        const options1 = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
            params: {
                dest_id: booking.searchvalobj.destination,
                search_type: 'CITY',
                arrival_date: booking.searchvalobj.checkindate,
                departure_date: booking.searchvalobj.checkoutdate,
                adults: booking.searchvalobj.adults,
                children_age: '0,17',
                room_qty: booking.searchvalobj.rooms,
                page_number: '1',
                languagecode: 'en-us',
                currency_code: 'AED'
            },
            headers: {
    'X-RapidAPI-Key': '65a9e11640msh56e6e3b0ade5e02p1b5fc9jsnee92b0d10ba0',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        function validatesearch(){
            //validation
            //already put required in input and selection tag
            if(destination.value==null){
                alert('choose destination!!')
                return 0
            }
            var today = new Date();
            if(Checkindate.value < today ){
                alert('check in date start at least from today')
                return 0
            }
            if(new Date(Checkindate.value) <= today ){
                alert('check out date start at least from tomorro')
                return 0
            }
            if(new Date(Checkoutdate.value) <= new Date(Checkindate.value) ){
                alert("envalid checkout date")
                return 0
            }
            if(new Date(Checkoutdate.value) == new Date(Checkindate.value) ){
                alert("you can't choose check in date equal to chek out date")
                return 0
            }
            if(Guests.value==0){
                alert("we can't search for reserve 0 gest")
                return 0
            }
            if(Rooms.value==0){
                alert("we can't search for reserve 0 room")
                return 0
            }
            return 1
        }
        async function search(){
            //validation
            if(validatesearch()){
            //const duration = new Date(Checkoutdate.value).getDate() - new Date(Checkindate.value).getDate()
            booking.setsearchval(destination.value,Checkindate.value,Checkoutdate.value,Guests.value,Rooms.value)
            booking.searchhotels(options1)
            console.log(options1.params)
            }
        }
        let data = ref(null)


        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
            params: {query: 'egypt'},
            headers: {
    'X-RapidAPI-Key': '65a9e11640msh56e6e3b0ade5e02p1b5fc9jsnee92b0d10ba0',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        onMounted(async()=>{
            data.value = await booking.getdestinations(options)
        })

        return { destination , Checkindate , Checkoutdate , Guests , Rooms , search , data}
    }
}
</script>

at searchresult send request
this function run one time at mounted