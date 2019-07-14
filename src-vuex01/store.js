/*
* vuex的核心管理对象模块:store
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//状态对象
const state = { //初始化状态
  count: 0
}

//包含多个更新state函数的对象
const mutations = {
  //增加的mutation
 INCREMENT(state) {
   state.count++
 },
  //增加的mutation
  DECREMENT(state) {
    state.count--
  }
}

//包含对应事件回调函数的对象
const actions ={
  //增加的action
  increment({commit}) {
    //提交mutation
    commit('INCREMENT')
  },
  decrement({commit}){
    //提交mutation
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    if(state.count%2===1){
      //提交mutation
      commit('DECREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(() =>{
      commit('DECREMENT')
    },1000)
  }
}

//包含多个getter计算属性函数的对象
const getters = {
  eventOrOdd(state) {
    return state.count%2===0 ? '偶数': '奇数'
  },
  count(state) {
    return state.count
  }
}

export default new Vuex.Store({
  state,  //状态对象
  mutations, //包含多个更新state函数的对象
  actions,  //包含对应事件回调函数的对象
  getters  //包含多个getter计算属性函数的对象
})
