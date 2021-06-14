<template>
  <div class="main">
      <AppForm :info="getStandard?infoStandard:infoReverse" />
  </div>
</template>

<script>
import AppForm from './AppForm.vue'
export default {
    name: 'AppMain',
    components:{
        AppForm
    },
    data(){
        return{
            infoStandard:{
                title: 'Standard',
                description: 'From this option you can see what amount you will get when you send a certain amount.',
                amountText: 'If you are sent',
                amountGetText: 'You will receive'
            },
            infoReverse:{
                title: 'Reverse',
                description: 'From this option you can see what amount you need to receive the amount entered.',
                amountText: 'To Receive',
                amountGetText: 'You need to be sent'
            }
        }
    },
    computed:{
        getStandard(){
            return this.$store.getters.standard
        }
    }
}
</script>

<style scoped>
    .main{
        text-align: center;
        display: flex;
        justify-content: center;
    }
</style>