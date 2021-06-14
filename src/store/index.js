import { createStore } from 'vuex'

export default createStore({
  state: {
    standard : true,
    rate: 5.4,
    commission:0.3
  },
  mutations: {
    changeStandard(state,stand){
      state.standard=stand
    },
    changeRate(state,rate){
      state.rate = rate
    },
    changeCommission(state, commission){
      state.commission = commission
    }
  },
  actions: {
    changeStandardAction(context,stand){
      context.commit('changeStandard',stand)
    },
    changeRateAction(context,rate){
      context.commit('changeRate',rate)
    },
    changeCommissionAction(context,commission){
      context.commit('changeCommission',commission)
    }
  },
  modules: {
  },
  getters:{
    standard(state){
      return state.standard
    },
    rate(state){
      return state.rate
    },
    commission(state){
      return state.commission
    }
  }
})
