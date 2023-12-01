<template>
  <div class="flex mx-auto w-[1240px] items-center my-4" :class="[ route.meta.componentname=='login' ? 'justify-start' : 'justify-between' , route.meta.componentname=='resultpage' ? 'text-white' : '' ]">
    <router-link :to="{ name : 'home'}"  class="flex items-center justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path v-if="route.meta.componentname!='resultpage'" d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
        <path v-else d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="white"/>
      </svg>
      <span class="text-lg tracking-wide	font-medium" :class="[ route.meta.componentname=='resultpage' ? 'text-white' : 'text-regal-black' ]">my Dream Place</span>
    </router-link>
    <div v-if="route.meta.componentname!='login' && route.meta.componentname!='booking'">
      <nav>
        <ul class="grid grid-cols-5 gap-x-12">
          <router-link :to="{ name : 'home'}" class=" text-base	font-normal	">Home</router-link>
          <li class=" text-base	font-normal	">Discover</li>
          <li class=" text-base	font-normal	">Activites</li>
          <li class=" text-base	font-normal	">About</li>
          <li class=" text-base	font-normal	">Contact</li>
        </ul>
      </nav>
    </div>
    <div class="flex " v-if="route.meta.componentname!='login' && !booking.isAuth">
      <router-link :to="{ name: 'login'}" class="bg-light-blue text-white	px-4 py-2.5 text-sm font-medium	leading-5	rounded-md	">Login</router-link>
    </div>
    <div v-if="booking.isAuth" class="flex relative">
      <button @click="showusermenu=!showusermenu">
        <img src="../assets/notification 1.png" alt="notification" class="mr-5">
        <div v-if="showusermenu" class="absolute bg-white z-10 w-[200px] rounded-lg right-[-5px]">
          <ul class="py-2.5">
            <li class="flex py-2.5 text-dark-gray text-sm	font-normal border-b-2 px-3.5">
              <img src="../assets/user-square 2.png" alt="user square" class="pr-2.5">
              <p>Manage account</p>
            </li>
            <li class="flex py-2.5 text-dark-gray text-sm	font-normal border-b-2 px-3.5">
              <img src="../assets/bxs-plane-take-off 1.png" alt="plane-take-off" class="pr-2.5">
              <router-link :to="{ name: 'mytrips' }">My trips</router-link>
            </li>
            <li class="flex py-2.5 text-dark-gray text-sm	font-normal border-b-2 px-3.5">
              <img src="../assets/wallet-3 1.png" alt="wallet" class="pr-2.5">
              <p>Reward and wallet</p>
            </li>
            <li class="flex py-2.5 text-dark-gray text-sm	font-normal px-3.5">
              <img src="../assets/logout 1.png" alt="logout" class="pr-2.5">
              <button @click="logout">Sign out</button>
            </li>
          </ul>
        </div>
      </button>
      <img src="../assets/Ellipse 2.png" alt="user">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { usebooking } from '@/stores/booking';

export default {
  components: { },
  setup(){
    const route = useRoute()
    const router = useRouter()

    const booking = usebooking()
    const showusermenu = ref(false)

    function logout(){
      booking.logout()
      /*to previent him continuoing in pages without authorization*/
        router.push({
          name: "home"
        })
    }
    return { route,booking,showusermenu,logout }
  }
}
</script>