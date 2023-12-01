<template>
    <main  class="flex items-center flex-col">
        <introsearchsection/>
        <searchbar class="absolute bottom-[-25px] top-[185px]"/>
        <article class="flex flex-col mt-12">
            <section class="w-[260px]"></section>
            <section class="w-[915px]">
                <div class="mb-6 flex justify-between">
                    <h1 class="text-primary-black text-2xl font-semibold">Melbourne : {{ booking.searchresultnum }} search results found</h1>
                    <form class="px-3 py-2 border flex flex-col w-[166px] h-[32px] box-content">
                        <label for="Sortby" class="text-[#828282] font-medium text-xs">Sort by</label>
                        <select name="Sortby" id="Sortby" v-model="sortby" class="focus:outline-none" @change="sort()">
                            <option value="null" disabled hidden selected>Recommended</option>
                            <option  v-for="sortcategory in data" :key="sortcategory.id" :value="sortcategory.id" class="text-black">{{ sortcategory.title }}</option>
                        </select>
                    </form>
                </div>
                <div>
                    <hotelcard />
                </div>
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
                sort_by: sortby.value
            },
            headers: {
    'X-RapidAPI-Key': '65a9e11640msh56e6e3b0ade5e02p1b5fc9jsnee92b0d10ba0',
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
    'X-RapidAPI-Key': '65a9e11640msh56e6e3b0ade5e02p1b5fc9jsnee92b0d10ba0',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        onMounted(async()=>{
            await booking.searchhotels(optionsgethotels)
            hotels.value = booking.hotels
            data.value = await booking.getsortcategories(optionsgetcategories)
        })

        async function sort(){
            await booking.searchhotels(optionsgethotels)
        }
        return { booking,sortby,data,sort }
    }
}
</script>