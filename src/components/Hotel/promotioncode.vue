<template>
    <div class="w-[400px] h-[340px] bg-gradient-to-b from-[#4796FF] to-[#2366BF] flex items-center relative rounded-md mr-3.5">
        <div class="ml-7">
            <router-link :to="{ name : 'home'}"  class="flex items-center justify-start mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.414 13.7779C2.5 13.9999 2 15.1919 2 15.1919C2 15.1919 5.398 15.6259 6.949 17.3129C8.5 18.9999 9.071 22.2629 9.071 22.2629C9.071 22.2629 10.47 22.6979 10.485 20.8489C10.5 18.9999 9.778 17.3129 9.778 17.3129L13.091 13.9999L16.701 21.7039C16.701 21.7039 18.08 22.2299 18.04 20.3649C18 18.4999 16.85 10.2419 16.85 10.2419L19.678 7.41294C19.869 7.22845 20.0214 7.00776 20.1262 6.76375C20.231 6.51974 20.2862 6.2573 20.2885 5.99174C20.2908 5.72619 20.2402 5.46283 20.1396 5.21703C20.0391 4.97124 19.8906 4.74794 19.7028 4.56015C19.515 4.37237 19.2917 4.22386 19.0459 4.1233C18.8001 4.02274 18.5368 3.97213 18.2712 3.97444C18.0056 3.97675 17.7432 4.03192 17.4992 4.13674C17.2552 4.24156 17.0345 4.39392 16.85 4.58494L13.947 7.48794C13.947 7.48794 6.148 6.09394 3.824 6.29694C1.5 6.49994 2.559 7.56294 2.559 7.56294L10.203 11.2329L6.95 14.4859C6.95 14.4859 4.328 13.5559 3.414 13.7779Z" fill="white"/>
                </svg>
                <span class="text-lg text-white tracking-wide font-medium">my Dream Place</span>
            </router-link>
            <p class="text-2xl text-white font-bold w-[195px]">20% off<br>Use Promotional Coupon Code: <span class="text-[#FFD723]">Orlando</span></p>
        </div>
        <img src="../../assets/Capture1.png" alt="boy" class="w-[177px] h-[291px] absolute right-[8px]">
    </div>
</template>

<script>
export default {

}
</script>