<template>
    <div class="flex flex-col items-center mt-24">
        <h1 class="text-primary-black text-3xl font-semibold mb-10 w-96 text-center">{{  type  }}</h1>
        <form class="grid grid-cols-1 gap-y-11 w-96">
            <div class="flex flex-col">
                <label for="email" class="text-primary-black text-sm font-medium mb-1">Email address</label>
                <input type="text" class="bg-light-gray py-2.5 px-3 rounded outline-none">
            </div>
            <div>
                <label for="Password" class="text-primary-black text-sm font-medium mb-1 rounded">Password</label>
                <div class="flex justify-between bg-light-gray py-2.5 px-3">
                    <input type="password" class="bg-light-gray outline-none w-full">
                    <span class="material-symbols-outlined text-dark-gray">visibility</span>
                </div>
            </div>
            <slot></slot>
            <button type="submit" class="mt-1.5 bg-light-blue text-white rounded text-base py-2.5">{{ btncontent }}</button>
        </form>
        <p class="mt-5 text-dark-gray text-base	font-normal tracking-wide">{{ paragraphcontent }} <router-link :to="{ name }" class="text-light-blue">{{ gotopage }}</router-link></p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['type'],
    setup(props){
        const paragraphcontent = computed(()=>{
            return props.type=='Sign in' ? "Don't have an account? " : "Already have an account? "
        })
        const btncontent = computed(()=>{
            return props.type=='Sign in' ? "Sign in" : 'Submit'
        })
        const name = computed(()=>{
            return props.type=='Sign in' ? "register" : "login"
        })
        const gotopage = computed(()=>{
            return props.type=='Sign in' ? "Register" : "Sign in"
        })

        return { paragraphcontent , name , gotopage , btncontent }
    }
}
</script>

<style>

</style>