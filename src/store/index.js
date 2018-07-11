import Vue from 'vue'
import Vuex from 'vuex'

import tags from './tags/index'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  modules: { tags },
  plugins: [createPersistedState()],
})

export default store
