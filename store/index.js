import Vuex from 'vuex'
import form from './modules/form'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      form,
    },
  })
}

export default createStore
