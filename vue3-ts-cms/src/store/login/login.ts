import { Module } from 'vuex'
import { IRootState } from '../index'
import { accountLoginRequest } from '@/service/login/login'

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
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 实现登录逻辑
      // console.log('执行accountLoginAction', payload)

      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
  }
}

export default loginModule
