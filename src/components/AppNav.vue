<template>
    <header class="header">
        <div class="headerLeft">
            <img alt="Paypal Logo" src="../assets/paypal-logo.png"> 
            <h1>Paypal Calculator Feeds</h1>
        </div>
        <div class="btnNav">
            <button :disabled="standard" @click="changeStandard" :class="{active: standard}" class="btnLeft"> Standard</button>
            <button :disabled="!standard" @click="changeStandard" :class="{active: !standard}" class="btnRigth">Reverse</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppNav',
    data(){
        return{
            standard: this.$store.getters.standard
        }
    },
    methods:{
        changeStandard(){
            this.standard = !this.standard;
            this.$store.dispatch('changeStandardAction',this.standard);
        }
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-around;
    }
    header img{
        height: 100px;
        width: 100px;
    }
    header .headerLeft{
        display: flex;
        text-align: center;   
    }
    header .headerLeft h1{
        padding: 15px 0;
        color: #1e477a;
    }
    header .btnNav{
        display: flex;
        align-items: center;
        padding: auto 0;
    }

    header .btnNav button{
        padding: 10px 20px;
        font-size: 25px;
        border: 1px solid #c9c9c9;
    }
    header .btnNav button.active{
        background: #1e477a;
        color: #fff;
    }
    header .btnNav button:hover{
        background: #3b7bbf;
        color: #fff;

    }

    header .btnNav button.btnLeft{
        border-radius: 20px 0 0 20px;
    }

    header .btnNav button.btnRigth{
        border-radius: 0px 20px 20px 0px;
    }
</style>