import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    info:[],
    item: 0,
    item2: 0,
    itemRead: 0
  },
  getters: {
    logState (state) {
      return state
    },
  },
  mutations: {
    push (state, payload) {
      state.info = payload.amount
    },
    increment (state) {
      if(state.count === 0){
      state.count ++
      }else
      {state.count --}
    },
    itemPlus (state) {
      state.item++
    },
    itemMinus (state) {
      state.item--
    },
    itemNumber (state, payload) {
      state.item = payload.amount
    },
    itemPlus2 (state) {
      state.item2++
    },
    itemMinus2 (state) {
      state.item2--
    },
    itemReadMore (state, payload) {
      state.itemRead = payload.amount
    },
  },
  actions: {
    log ({ commit }) {
      commit('increment')
    },
    itemPlus ({ commit }) {
      commit('itemPlus')
    },
    itemMinus ({ commit }) {
      commit('itemMinus')
    },
    itemPlus2 ({ commit }) {
      commit('itemPlus2')
    },
    itemMinus2 ({ commit }) {
      commit('itemMinus2')
    },

  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
export default store

