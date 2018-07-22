import Vue from 'vue'
import Vuex from 'vuex'

import tags from './tags/index';
import produtoDetalhe from './produto-detalhe/index';
import usuario from './usuario/index';
import calcadoFavorito from './calcados-favoritos/index';

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  modules: { tags, produtoDetalhe, usuario, calcadoFavorito },
  plugins: [createPersistedState()],
})

export default store
