<template>
  <article class="flex justify-center py-6 bg-gradient-to-b from-light-gray to-white">
    <hotelview :photos="photos"/>
  </article>
  <section class="flex justify-center">
    <div class="mt-1.5 w-[1240px] mb-[8px]">
      <span class="py-2.5 px-3.5 mr-3.5 border-b-4 border-light-blue">Overview</span>
      <span class="py-2.5 px-3.5">Rooms</span>
    </div>
  </section>
  <article class="pt-10 bg-light-gray flex justify-center">
    <hoteldetails :mapsrc="mapsrc" :hotelid="hotelid" :hoteldata="hoteldata" :facilities="facilities"/>
  </article>
  <article class="bg-light-gray flex justify-center pb-40 flex flex-col items-center">
    <availablerooms :availablerooms="availablerooms"/>
    <covedcheck class="pt-40"/>
  </article>
</template>

<script>
import Hotelview from '@/components/Hotel/hotelview.vue'
import Hoteldetails from '@/components/Hotel/hoteldetails.vue'
import Availablerooms from '@/components/Hotel/availablerooms.vue'
import Covedcheck from '@/components/repetativ component/covedcheck.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usebooking } from '@/stores/booking'

export default {
  components: {Hotelview, Hoteldetails, Availablerooms, Covedcheck  },
  setup(){
    const route = useRoute()
    const booking = usebooking()
    let hotel = ref(null)
    const hotelid = ref(route.params.id)
    const photos = ref([])
    const mapsrc = ref([])
    const hoteldata = ref([])
    const facilities = ref([])
    const availablerooms = ref([])

    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails',
      params: {
        hotel_id: hotelid.value,
        arrival_date: booking.searchvalobj.checkindate,
        departure_date: booking.searchvalobj.checkoutdate,
        adults: booking.searchvalobj.guests,
        children_age: '1,17',
        room_qty: booking.searchvalobj.rooms,
        languagecode: 'en-us',
        currency_code: 'EUR'
      },
    headers: {
    'X-RapidAPI-Key': 'ffac61851dmsh5475f6ae241a8a8p16a7bajsn0070881a46cf',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
    };

    onMounted(async()=>{
      hotel.value = await booking.gethoteldetails(options)
      photos.value[0] = hotel.value.data.rooms[Object.keys(hotel.value.data.rooms)[0]].photos[0].url_max750
      photos.value[1] = hotel.value.data.rooms[Object.keys(hotel.value.data.rooms)[0]].photos[1].url_max300
      photos.value[2] = hotel.value.data.rooms[Object.keys(hotel.value.data.rooms)[0]].photos[2].url_max300
      mapsrc.value[0] = hotel.value.data.latitude
      mapsrc.value[1] = hotel.value.data.longitude

      hoteldata.value[0] = hotel.value.data.hotel_name
      hoteldata.value[1] = hotel.value.data.review_nr
      hoteldata.value[2] = hotel.value.data.address

      facilities.value = hotel.value.data.facilities_block.facilities

      availablerooms.value[0] = hotel.value.data.available_rooms
      availablerooms.value[1] = hotel.value.data.rooms[Object.keys(hotel.value.data.rooms)[0]].photos[1]?.url_max300
      availablerooms.value[2] = hotel.value.data.rooms[Object.keys(hotel.value.data.rooms)[0]].bed_configurations[0].bed_types[0].name_with_count

    })

    return { hotel , hotelid , photos , mapsrc , hoteldata , facilities , availablerooms}

  }
}
</script>