<template>
    <div class="appForm w-5/6 sm:w-1/2">
        <h2 class="text-2xl">Calculator {{info.title}}</h2>
        <p class="text-xs">{{info.description}}</p>
        <div class="inputForm flex flex-col items-start md:px-40 py-4">
            <label  for="amount">{{info.amountText}}:</label>
            <input type="number" id="amount" v-model="amount">
        </div>
        <div class="feeds">
            <div class="flex flex-col items-start md:px-40 pb-4">
                <label  for="rate">Rate:</label>
                <input type="number" id="rate" v-model="rate" :blur="changeRate">
            </div>
            <div class="flex flex-col items-start md:px-40 pb-4">
                <label  for="commission">Commission:</label>
                <input type="number" id="commission" v-model="commission" :blur="changeCommission">
            </div>
        </div>
        <div class="buttonWrapper mb-4">
            <button @click="calculateFeeds" >Calcular Paypal Fees</button>
        </div>

        <div class="infoFeed">
            <h2 class="text-xl mb-4">Amount Feeds</h2>
            <div class="inputForm flex flex-col items-start md:px-40 mb-4">
                <label  for="infoamount">{{info.amountGetText}}:</label>
                <input disabled type="number" id="infoamount" :value="amountFeed">
            </div>
            <div class="inputForm flex flex-col items-start md:px-40">
                <label  for="fees">Paypal fees will be:</label>
                <input disabled type="number" id="fees" :value="fees.toFixed(2)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AppForm',
    props:{
        info:{
            type:Object
        },
    },
    data(){
        return{
            amount: 0,
            rate: this.$store.getters.rate,
            commission: this.$store.getters.commission,
            fees: 0.0,
            amountFeed: 0.0
        }
    },
    methods:{
        changeRate(){
            this.$store.dispatch('changeRateAction',this.rate);
        },
        changeCommission(){
            this.$store.dispatch('changeCommissionAction',this.commission);
        },
        calculateFeeds(){
            let rate = this.standard?(Number(this.rate)/100):(Number(this.rate)/100)+0.03;
            this.fees = ( Number(this.amount) * rate) + Number(this.commission)
            this.amountFeed = this.getStandard?(Number(this.amount) - Number(this.fees)):(Number(this.amount) + Number(this.fees))  
        }
    },
    computed:{
        getStandard(){
            return this.$store.getters.standard
        }
    },
    watch:{
        getStandard(){
            this.amount=0;
            this.fees=0;
            this.amountFeed=0;
        }
    }
        
    

}
</script>

<style scoped>
    .appForm{
        border: 1px solid #c9c9c9;
        padding: 20px 50px 50px 50px;
        border-radius: 50px;
    }
    .appForm input{
        border-radius: 5px;
        padding: 5px;
        border: 1px solid #c9c9c9;
    }
    .appForm p{
        color:#696969;
    }
    .appForm .inputForm label, .appForm .feeds label, .appForm .infoFeed label{
        margin-right: 10px;
    }

    .appForm .buttonWrapper button{
        padding: 15px;
        font-size: 18px;
        background:#1e477a;
        color:white;
        border-radius: 20px;
        border: 1px solid #c9c9c9;
        
    }
    .appForm .buttonWrapper button{
        background: #3b7bbf;
        color: #fff;
        cursor: pointer;
    }
</style>