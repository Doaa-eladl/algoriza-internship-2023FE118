<template>
  <section class="flex flex-col" :class="[ $route.name=='mytrips' || $route.name=='hotel' ? 'bg-light-gray' : '']">
    <div class="flex flex-row mb-16 w-[1240px] mx-auto">
        <div class="w-[205px] mr-20	">
            <ul>
                <li>
                    <router-link :to="{ name : 'home'}"  class="flex items-center justify-start mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
                        </svg>
                        <span class="text-lg text-regal-black tracking-wide	font-medium">my Dream Place</span>
                    </router-link>
                </li>
                <li class="ml-7 footerlist">Your next goto companion for travel</li>
            </ul>
        </div>
        <div class="w-[70px] mr-40">
            <p class="text-lg text-regal-black tracking-wide font-medium mb-5">Company</p>
            <ul class="grid gap-y-2.5">
                <li class="footerlist">About</li>
                <li class="footerlist">Jobs</li>
                <li class="footerlist">Advertising</li>
                <li class="footerlist">Contact us</li>
                <li class="footerlist">Newsroom</li>
            </ul>
        </div>
        <div class="w-[184px] mr-16">
            <p class="text-lg text-regal-black tracking-wide font-medium mb-5">Australia</p>
            <ul class="grid gap-y-2.5">
                <li class="footerlist">New Zealand</li>
                <li class="footerlist">United States America (USA)</li>
                <li class="footerlist">Greece</li>
                <li class="footerlist">Maldives</li>
                <li class="footerlist">Singapore</li>
                <li class="text-light-blue text-sm not-italic font-normal leading-5 tracking-wide">See more</li>
            </ul>
        </div>
        <div class="w-[159px] mr-24">
            <p class="text-lg text-regal-black tracking-wide font-medium mb-5">Terms and Policies</p>
            <ul class="grid gap-y-2.5">
                <li class="footerlist">Privacy Policy</li>
                <li class="footerlist">Terms of use</li>
                <li class="footerlist">Acessibility</li>
                <li class="footerlist">Reward system policy</li>
            </ul>
        </div>
        <div class="w-[220px]">
            <p class="text-lg text-regal-black tracking-wide font-medium mb-5">Help</p>
            <ul class="grid gap-y-2.5">
                <li class="footerlist">Support</li>
                <li class="footerlist">Cancel your bookings</li>
                <li class="footerlist">Use Coupon</li>
                <li class="footerlist">Refund Policies</li>
                <li class="footerlist">International Travel Documents</li>
            </ul>
        </div>
    </div>
  </section>
  <outro />
</template>

<script>
import outro from './outro.vue'
export default {
  components: { outro },

}
</script>