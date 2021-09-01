import { Module } from 'vuex'
import { IRootState } from '../type'
import {
  accountLoginRequest,
  requsestUserInfoById,
  requsestUserUserMenus
} from '@/service/login/login'
import localCache from '@/utils/cache'

import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

export interface IloginModule {
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

      const routes = mapMenusToRoutes(userLists)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
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

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userLists = localCache.getCache('userLists')
      if (token) {
        commit('changeUserLists', userLists)
      }
    }
  }
}

export default loginModule
