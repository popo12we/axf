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
    // 购物车添加
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
    // 购物车减少
    minus (state, payload) {
      const isExistProduct = state.beeCartList.find(item => item.id === payload.id)
      isExistProduct.count--
      localStorage.setItem('beeCart', JSON.stringify(state.beeCartList))
    },
    // 点击右侧删除按钮删除一整项的逻辑
    del (state, payload) {
      let idx = state.beeCartList.findIndex(item => item.id === payload.id)
      state.beeCartList.splice(idx, 1)
      localStorage.setItem('beeCart', JSON.stringify(state.beeCartList))
    },
    // 点击字体图标更新一整项的逻辑
    update (state, payload) {
      let idx = state.beeCartList.findIndex(item => item.id === payload.id)
      state.beeCartList[idx].isSelected = !state.beeCartList[idx].isSelected
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
    },
    updateOne (context, obj) {
      context.commit('update', obj)
    }
  },
  getters: {
    // 总价格
    allPrice () {
      let sum = 0
      // 用临时数组arr来过滤出 已经选中的商品,只有选中的商品才能去计算他们的总价格
      let arr = store.state.beeCartList.filter(item => item.isSelected)
      arr.forEach(item => {
        sum += item.price * item.count
      })
      // 如果购物价格满30才能减优惠券里的值否则不减原样输出
      if (sum >= 30) {
        sum = sum - store.state.couponmoney
      }
      return sum
    },
    // 总商品件数
    allCount () {
      let all = 0
      // 用临时数组arr来过滤出 已经选中的商品,只有选中的商品才能去计算他们的总件数
      let arr = store.state.beeCartList.filter(item => item.isSelected)
      arr.forEach(item => {
        all += item.count
      })
      return all
    },
    // 总价满30元展示出优惠券 如果购物价格超过30元才展示否则不展示
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
