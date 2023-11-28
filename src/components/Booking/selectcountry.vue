<template>
    <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
  </template>
  
<script>
    import { ref } from 'vue';
    import { VueTelInput } from 'vue-tel-input';
    import 'vue-tel-input/vue-tel-input.css';
  
    export default {
      components: {
        VueTelInput,
      },
      setup() {
        const phone = ref(null);
        return {phone};
      },
    };
</script>

<style scoped>
    /*it is the only one accept changes */
    .vue-tel-input{
      width: 500px;
      justify-content: space-between;
      border: none;
    }
    /*doesn't change the defult style even i use !important */
    .vti__dropdown{
      width: 105px;
    }
    .vti__selection{
      display: flex;
      justify-content: space-between;
    }
    .vti__input{
      width: 340px;
      background-color: #F2F2F2;
    }
</style>