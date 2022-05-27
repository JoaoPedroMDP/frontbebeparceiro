import Vuex from 'vuex'
import form from './modules/form'
import auth from './modules/auth'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      form,
      auth,
    },
  })
}

export default createStore
