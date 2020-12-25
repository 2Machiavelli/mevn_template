import Vue from 'vue'
import Vuex from 'vuex'
import smth from './modules/smth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    smth
  }
})
