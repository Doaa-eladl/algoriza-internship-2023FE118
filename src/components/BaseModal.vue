<template>
    <Teleport to="body">
        <Transition name="model-outer">
            <div class="absolute w-full bg-black bg-opacity-30 top-0 left-0 flex justify-center px-8" v-show="showcondition" @click.self="closemodel" :class="[ props.showmodal ? 'h-[240vh]' : 'h-screen']">
                <Transition name="model-inner">
                    <div class="bg-white self-start m-auto z-10 w-[400px] h-[500px] flex flex-col items-center text-center rounded-lg" v-if="showcondition">
                        <slot />
                        <button class="btn pb-7 w-[352px]" @click="$emit('close')" v-if="props.btncontent!='View Trip'">{{ props.btncontent }}</button>
                        <template v-else>
                            <router-link class="btn pb-7 w-[352px]" :to="{ name: 'mytrips' }">{{ props.btncontent }}</router-link>
                        </template>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
import { defineEmits, onMounted, ref } from 'vue'
import { usebooking } from '@/stores/booking';

export default {
    props:['btncontent','showmodal'],
    setup(props){
        defineEmits(['close'])
        const booking = usebooking()
        let showcondition = ref(null)

        onMounted(()=>{
            showcondition.value = props.showmodal == null ? booking.isfirst : props.showmodal
        })
        function closemodel(){
            booking.isfirst = false
            /*i try to make this fun run when booking page but child can not reassign value props
            i try with computed properity or whates
            but i think there is no logic if use can close this model without redirect to my tri becuse we shoulde't allow user to reserve the same room twice
            may be i but flag 0 and add it and it open model one time and if use close model and click reserve again it show you already reserved it
            but i think redirect to mytrips page more meaningful
            may be onupdate solve the problem
            */
        }
        return { props,booking,closemodel,showcondition }
    }
}
</script>

<style scoped>
.model-outer-enter-active,
.model-outer-leave-active {
  transition: opacity 0.2s cubic-bezier(0.52,.02,0.19,1.02);
}

.model-outer-enter-from,
.model-outer-leave-to {
  opacity: 0;
}


.model-inner-enter-active{
  transition: all 0.3s cubic-bezier(0.52,.02,0.19,1.02) 0.15s;
}

.model-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52,.02,0.19,1.02) 0.15s;
}
</style>