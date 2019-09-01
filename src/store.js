import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    beeCartList: JSON.parse(localStorage.getItem('beeCart')) || [],
    // 优惠券一开始默认省0元
    couponmoney: 0
  },
  mutations: {
    add (state, payload) {
      // 1.先确定添加的项在购物车之中是否已经存在
      const isExistProduct = state.beeCartList.find(item => item.id === payload.id)
      // 2.1如果已经存在 对应的项++就行
      if (isExistProduct) {
        isExistProduct.count++
      } else {
        // 2.2如果找不到 就说明是第一次添加的 这时候要把整个对象添加到购物车里
        state.beeCartList.push(
          payload
        )
      }
      // 3.添加到localStorage中
      localStorage.setItem('beeCart', JSON.stringify(state.beeCartList))
    },
    minus (state, payload) {
      const isExistProduct = state.beeCartList.find(item => item.id === payload.id)
      isExistProduct.count--
      localStorage.setItem('beeCart', JSON.stringify(state.beeCartList))
    },

    del (state, payload) {
      let idx = state.beeCartList.findIndex(item => item.id === payload.id)
      state.beeCartList.splice(idx, 1)
      localStorage.setItem('beeCart', JSON.stringify(state.beeCartList))
    }
  },
  actions: {
    addOne (context, obj) {
      context.commit('add', obj)
    },
    minusOne (context, obj) {
      context.commit('minus', obj)
    },
    delOne (context, obj) {
      context.commit('del', obj)
    }
  },
  getters: {
    // 总价格
    allPrice () {
      let sum = 0
      store.state.beeCartList.forEach(item => {
        sum += item.price * item.count
      })
      if (sum >= 30) {
        sum = sum - store.state.couponmoney
      }
      return sum
    },
    // 总商品件数
    allCount () {
      let all = 0
      store.state.beeCartList.forEach(item => {
        all += item.count
      })
      return all
    },
    // 总价满30元展示出优惠券
    isShowCoupon () {
      let sum = 0

      store.state.beeCartList.forEach(item => {
        sum += item.price * item.count
      })

      return sum >= 30
    }

  }

})
export default store
