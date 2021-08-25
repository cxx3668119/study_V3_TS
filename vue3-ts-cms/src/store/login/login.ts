import { Module } from 'vuex'
import { IRootState } from '../index'

interface IloginModule {
  token: string
  userInfo: any
}

const loginModule: Module<IloginModule, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  }
}

export default loginModule
