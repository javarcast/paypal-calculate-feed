<template>
    <div class="appForm">
        <h2>Calculator {{info.title}}</h2>
        <p>{{info.description}}</p>
        <div class="inputForm">
            <label  for="amount">{{info.amountText}}:</label>
            <input type="number" id="amount" v-model="amount">
        </div>
        <div class="feeds">
            <div>
                <label  for="rate">Rate:</label>
                <input type="number" id="rate" v-model="rate" :blur="changeRate">
            </div>
            <div>
                <label  for="commission">Commission:</label>
                <input type="number" id="commission" v-model="commission" :blur="changeCommission">
            </div>
        </div>
        <div class="buttonWrapper">
            <button @click="calculateFeeds" >Calcular Paypal Fees</button>
        </div>

        <div class="infoFeed">
            <h2>Amount Feeds</h2>
            <div class="inputForm">
                <label  for="infoamount">{{info.amountGetText}}:</label>
                <input disabled type="number" id="infoamount" :value="amountFeed">
            </div>
            <div class="inputForm">
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
        width:50%;
        padding: 20px 50px 50px 50px;
        border-radius: 50px;
    }
    .appForm input{
        border-radius: 5px;
        padding: 5px;
        border: 1px solid #c9c9c9;
    }
    .appForm .inputForm{
        margin: 20px 0;
    }
    .appForm p{
        color:#696969;
    }
    .appForm .inputForm label, .appForm .feeds label, .appForm .infoFeed label{
        margin-right: 10px;
    }

    .appForm .buttonWrapper{
        margin: 15px 0;
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
    .feeds{
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        flex-wrap: wrap;
    }
</style>