<template>
    <main  class="flex items-center flex-col">
        <introsearchsection/>
        <searchbar class="absolute bottom-[-25px] top-[185px]" @search="search"/>
        <article class="flex flex-row mt-12">
            <section>
                <form class="h-[120px] flex flex-col justify-center items-start bg-light-gray rounded-md p-5 mr-5">
                    <label for="searchbyname" class="pb-4 text-primary-black text-base font-medium">Search by property name</label>
                    <div class="flex bg-white rounded-md p-2.5">
                        <img src="../assets/search 1.png" alt="search" class="pr-2">
                        <input type="text" name="searchbyname" id="searchbyname" placeholder="eg. Beach westpalm" v-model="searchbyname" class="focus:outline-none">
                    </div>
                </form>
                <div class="mr-5">
                    <p class="my-5 text-lg font-semibold text-black">Filter by</p>
                    <div class="border rounded-md">
                        <p class="text-primary-black font-medium text-base p-4 w-full h-[55px] bg-light-gray rounded-t-md">Your budget per day</p>
                        <div class="p-5">
                            <div class="mb-3.5">
                                <input type="radio" name="padget"  class="mr-2" v-model="budget" value="first">
                                <label class="text-sm text-black font-normal">$ 0 - $ 200</label>
                            </div>
                            <div class="mb-3.5">
                                <input type="radio" name="padget" class="mr-2" v-model="budget" value="second">
                                <label class="text-sm text-black font-normal">$ 200 - $ 500</label>
                            </div>
                            <div class="mb-3.5">
                                <input type="radio" name="padget" class="mr-2" v-model="budget" value="third">
                                <label class="text-sm text-black font-normal">$ 500 - $ 1,000</label>
                            </div>
                            <div class="mb-3.5">
                                <input type="radio" name="padget" class="mr-2" v-model="budget" value="fourth">
                                <label class="text-sm text-black font-normal">$ 1,000 - $ 2,000</label>
                            </div>
                            <div class="mb-3.5">
                                <input type="radio" name="padget" class="mr-2" v-model="budget" value="fifth">
                                <label class="text-sm text-black font-normal">$ 2,000 - $ 5,000</label>
                            </div>
                            <div class="mb-3.5 flex justify-between">
                                <label class="text-sm text-dark-gray font-normal">Set your own budget</label>
                                <div class="w-[32px] h-[20px] rounded-full ease-out duration-300" :class="setownbudget? 'bg-light-blue' : 'bg-[#BDBDBD]'">
                                    <button class="w-[18px] h-[18px] bg-white rounded-full shadow shadow-[#BDBDBD] shadow-2xl ease-out duration-300" :class="setownbudget? 'translate-x-3' : 'translate-x-0'" @click="setownbudget=!setownbudget"></button>
                                </div>
                            </div>
                            <form class="border border-dashed pt-2.5 px-2.5">
                                <div class="flex justify-between mb-2">
                                    <input type="text" onfocus="(this.type='number')" placeholder="Min budget"
                                    class="border rounded p-2 w-[103px] focus:outline-none"
                                    v-model="minbudget" @keydown.enter="filterbybadget()" required :disabled="!setownbudget">
                                    <input type="text" onfocus="(this.type='number')" placeholder="Max budget"
                                    class="border rounded p-2 w-[103px] focus:outline-none" 
                                    v-model="maxbudget" @keydown.enter="filterbybadget()" required :disabled="!setownbudget">
                                </div>
                                <p class="text-xs font-normal text-dark-gray">Press Enter to filter</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-start mt-5 mr-5 rounded-md border">
                    <p class="text-primary-black font-medium text-base p-4 w-full h-[55px] bg-light-gray">Rating</p>
                    <div class="flex flex-col justify-center items-start w-[295px] p-5">
                        <p class="text-dark-gray text-sm font-normal pb-2">Show only ratings more than</p>
                        <div class="flex">
                            <button class="rounded-l-md btnrate"
                             @click="filterbyrate('1')">
                                1
                                <img src="../assets/star-s-fill 1.png" alt="star rate">
                            </button>
                            <button class="btnrate"
                            @click="filterbyrate('2')">
                                2
                                <img src="../assets/star-s-fill 1.png" alt="star rate">
                            </button>
                            <button class="btnrate"
                            @click="filterbyrate('3')">
                                3
                                <img src="../assets/star-s-fill 1.png" alt="star rate">
                            </button>
                            <button class="btnrate"
                            @click="filterbyrate('4')">
                                4
                                <img src="../assets/star-s-fill 1.png" alt="star rate">
                            </button>
                            <button class="btnrate rounded-r-md"
                            @click="filterbyrate('5')">
                                5
                                <img src="../assets/star-s-fill 1.png" alt="star rate">
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-[915px]">
                <div class="mb-6 flex justify-between">
                    <h1 class="text-primary-black text-2xl font-semibold">Melbourne : {{ booking.searchresultnum }} search results found</h1>
                    <form class="px-3 py-2 border flex flex-col w-[166px] h-[32px] box-content">
                        <label for="Sortby" class="text-[#828282] font-medium text-xs">Sort by</label>
                        <select name="Sortby" id="Sortby" v-model="sortby" class="focus:outline-none" @change="sort">
                            <option value="null" disabled hidden selected>Recommended</option>
                            <option  v-for="sortcategory in data" :key="sortcategory.id" :value="sortcategory.id" class="text-black">{{ sortcategory.title }}</option>
                        </select>
                    </form>
                </div>
                <div>
                    <hotelcard :hotels="hotels"/>
                </div>
                <div class="pagination"></div>
            </section>
        </article>
    </main>
</template>

<script>
import introsearchsection from '@/components/ResultPage\'/introsearchsection.vue'
import Searchbar from '@/components/repetativ component/searchbar.vue';
import { onMounted , ref , watch} from 'vue';
import { usebooking } from '@/stores/booking';
import Hotelcard from '@/components/ResultPage\'/hotelcard.vue';

export default {
  components: { introsearchsection,
    Searchbar,
    Hotelcard },
    setup(){

        const booking = usebooking()
        let hotels = ref([])
        const sortby = ref(null)
        let data = ref()
        const searchbyname = ref(null)
        const budget = ref(null)
        const minbudget = ref(null)
        const maxbudget = ref(null)
        const setownbudget = ref(false)

        watch(searchbyname,()=>{
            hotels.value = booking.hotels
            hotels.value = hotels.value.filter( hotel => 
                hotel.property.name.toLowerCase()
                .startsWith(searchbyname.value.toLowerCase())
                //using startsWith to start litter or includes to letter anywhere in name
            )
        })

        watch(budget,async()=>{
            if(budget.value=='first'){
                optionsgethotels.params.price_min = 0
                optionsgethotels.params.price_max = 200
            }
            else if(budget.value=='second'){
                optionsgethotels.params.price_min = 200
                optionsgethotels.params.price_max = 500
            }
            else if(budget.value=='third'){
                optionsgethotels.params.price_min = 500
                optionsgethotels.params.price_max = 1000
            }
            else if(budget.value=='fourth'){
                optionsgethotels.params.price_min = 1000
                optionsgethotels.params.price_max = 2000
            }
            else if(budget.value=='fifth'){
                optionsgethotels.params.price_min = 2000
                optionsgethotels.params.price_max = 5000
            }
            await booking.searchhotels(optionsgethotels)
            hotels.value = booking.hotels
        })

        function filterbyrate(r){
            hotels.value = booking.hotels
            hotels.value = hotels.value.filter( hotel => {
                return hotel.property.reviewScore >= r*2
            })
        }

        async function filterbybadget(){
            if(minbudget.value<0){
                alert('minimam at least 0')
                return 0
            }
            if(maxbudget.value<minbudget.value){
                alert("max should't be less than minimam")
                return 0
            }
            optionsgethotels.params.price_min = minbudget.value
            optionsgethotels.params.price_max = maxbudget.value

            await booking.searchhotels(optionsgethotels)
            hotels.value = booking.hotels
        }

        const optionsgethotels = {
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
                currency_code: 'AED',
                sort_by: sortby.value,
                price_min: minbudget.value,
                price_max: maxbudget.value
            },
            headers: {
    'X-RapidAPI-Key': 'ffac61851dmsh5475f6ae241a8a8p16a7bajsn0070881a46cf',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        const optionsgetcategories = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy',
            params: {
                dest_id: booking.searchvalobj.destination,
                search_type: 'CITY',
                arrival_date: booking.searchvalobj.checkindate,
                departure_date: booking.searchvalobj.checkoutdate,
                adults: booking.searchvalobj.adults,
                children_age: '0,17',
                room_qty: booking.searchvalobj.rooms,
            },
            headers: {
    'X-RapidAPI-Key': 'ffac61851dmsh5475f6ae241a8a8p16a7bajsn0070881a46cf',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        onMounted(async()=>{
            await booking.searchhotels(optionsgethotels)
            hotels.value = booking.hotels
            data.value = await booking.getsortcategories(optionsgetcategories)
        })

        async function sort(){
            optionsgethotels.params.sort_by = sortby.value

            await booking.searchhotels(optionsgethotels)
            hotels.value = booking.hotels
        }

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
        async function search(destination,Checkindate,Checkoutdate,Guests,Rooms){
            if(validatesearch(destination,Checkindate,Checkoutdate,Guests,Rooms)){
                booking.setsearchval(destination,Checkindate,Checkoutdate,Guests,Rooms)
                
                optionsgethotels.params.dest_id = destination
                optionsgethotels.params.arrival_date = Checkindate
                optionsgethotels.params.departure_date = Checkoutdate
                optionsgethotels.params.adults = Guests
                optionsgethotels.params.room_qty = Rooms
                optionsgethotels.params.sort_by = sortby.value

                await booking.searchhotels(optionsgethotels)
                hotels.value = booking.hotels

            }
        }
        return { booking,sortby,data,search,hotels,sort,searchbyname,filterbyrate,budget,filterbybadget,setownbudget,minbudget,maxbudget }
    }
}
</script>