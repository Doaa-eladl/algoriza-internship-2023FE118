<template>
    <div class="flex flex-col items-center mt-24">
        <h1 class="text-primary-black text-3xl font-semibold mb-10 w-96 text-center">{{  type  }}</h1>
        <form class="grid grid-cols-1 gap-y-11 w-96" @submit.prevent="submitform">
            <div class="flex flex-col">
                <label for="email" class="text-primary-black text-sm font-medium mb-1">Email address</label>
                <input type="text" class="bg-light-gray py-2.5 px-3 rounded outline-none" v-model="email" required @blur="validateEmail">
            </div>
            <div>
                <label for="Password" class="text-primary-black text-sm font-medium mb-1 rounded">Password</label>
                <div class="flex justify-between bg-light-gray py-2.5 px-3">
                    <input type="password" class="bg-light-gray outline-none w-full" v-model="pass" required>
                    <!--<span class="material-symbols-outlined text-dark-gray" v-if="pass==null || pass==''">visibility</span>-->
                </div>
            </div>
            <slot></slot>
            <button type="submit" class="mt-1.5 bg-light-blue text-white rounded text-base py-2.5">{{ btncontent }}</button>
        </form>
        <p class="mt-5 text-dark-gray text-base	font-normal tracking-wide">{{ paragraphcontent }} <router-link :to="{ name }" class="text-light-blue">{{ gotopage }}</router-link></p>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { usebooking } from '@/stores/booking';
import { useRouter } from 'vue-router';

export default {
    props:['type','confirmpass'],
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

        const pass = ref(null)
        const email = ref(null)
        const router = useRouter()

        const booking = usebooking()

        function validateEmail() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                alert('Please enter a valid email address')
            }
        }
        function validatePass() {
            //may add validation to force user enter number and special character in the same way i just show way but i haven't time
            if (pass.value.length<=8) {
                alert("password should be above 8 character")
            }
            /*it will be run when register only*/
            if (props.type=='Register' && pass.value!=props.confirmpass) {
                alert("password doesn't equal confirm password")
            }
        }
        async function register(){
            validateEmail()
            validatePass()
            const result = await booking.register({
                email:email.value,
                password:pass.value,
                /*use it to know if it the first time show model*/
                count:0
            })
            if(result==0){
                alert("this user exist already sign in")
            }
            router.push({
                name: "login"
            })
        }
        async function login(){
            validateEmail()
            validatePass()
            const result = await booking.login(email.value,pass.value)
            if(result==1){
                //doing than to now he login first or search then login so i enter him directly to result page
                if(booking.searchvalobj.destination==null){
                    router.push({
                        name: "home"
                    })
                }
                else{
                    router.push({
                        name: "resultpage"
                    })
                }
            }
            else{
                alert("email or password wrong try again")
            }
        }
        function submitform(){
            if(props.type=='Sign in'){
                login()
            }
            else{
                register()
            }
        }

        return { paragraphcontent , name , gotopage , btncontent , email , pass , submitform , validateEmail }
    }
}
</script>