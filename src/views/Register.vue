<template>
    <Theform type="Register">    
        <div>
            <label for="ConfirmPassword" class="text-primary-black text-sm font-medium mb-1 rounded">Confirm Password</label>            
            <div class="flex justify-between bg-light-gray py-2.5 px-3">
                <input type="password" class="bg-light-gray outline-none w-full">
                <span class="material-symbols-outlined text-dark-gray">visibility</span>
            </div>
        </div>
    </Theform>
  </template>
  
  <script>
  import Theform from '@/components/Theform.vue';
  
  export default {
    components: { Theform },
  
  }
  </script>