<template>
    <Theform type="Register" :confirmpass="confirmpass">
        <div>
            <label for="ConfirmPassword" class="text-primary-black text-sm font-medium mb-1 rounded">Confirm Password</label>            
            <div class="flex justify-between bg-light-gray py-2.5 px-3">
                <input type="password" class="bg-light-gray outline-none w-full" v-model="confirmpass" required>
                <!--<span class="material-symbols-outlined text-dark-gray" v-if="confirmpass==null || confirmpass==''">visibility</span>-->
            </div>
        </div>
    </Theform>
  </template>
  
<script>
import Theform from '@/components/Theform.vue';
import { ref } from 'vue';

export default {
    components: { Theform },
    setup(){
        const confirmpass = ref(null)
        return { confirmpass }
    }
  }
</script>