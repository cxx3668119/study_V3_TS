import { Module } from 'vuex'
import { IRootState } from '../index'
import {
  accountLoginRequest,
  requsestUserInfoById,
  requsestUserUserMenus
} from '@/service/login/login'
import localCache from '@/utils/cache'

interface IloginModule {
  token: string
  userInfo: any
  userMenus: any
}

const loginModule: Module<IloginModule, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserLists(state, userLists: any) {
      state.userMenus = userLists
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 实现登录逻辑
      // console.log('执行accountLoginAction', payload)

      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requsestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 获取用户菜单列表
      const userMenuLists = await requsestUserUserMenus(userInfo.role.id)
      const userLists = userMenuLists.data
      commit('changeUserLists', userLists)
      localCache.setCache('userLists', userLists)
      console.log(userLists)
    }
  }
}

export default loginModule