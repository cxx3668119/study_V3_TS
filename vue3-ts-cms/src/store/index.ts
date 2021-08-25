import { createStore } from 'vuex'
import login from './login/login'

export interface IRootState {
  name: string
  age: number
}

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'cxx',
      age: 23
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
