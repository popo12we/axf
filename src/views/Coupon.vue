<template>
  <div class="coupon">
    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @change="onChange"
        :show-exchange-bar="false"
      />
    </van-popup>
  </div>
</template>
<script>
// 1元优惠券
const coupon1 = {
  available: 1,
  condition: '满30元\n优惠1元',
  value: 100,
  name: '1元优惠券',
  startAt: 1567204000,
  endAt: 1568092000,
  valueDesc: '1',
  unitDesc: '元'
}
// 2元优惠券
const coupon2 = {
  available: 2,
  condition: '满30元\n优惠2元',
  value: 200,
  name: '2元优惠券',
  startAt: 1567204000,
  endAt: 1568092000,
  valueDesc: '2',
  unitDesc: '元'
}
// 3元优惠券
const coupon3 = {
  available: 3,
  condition: '满30元\n优惠3元',
  value: 300,
  name: '3元优惠券',
  startAt: 1567204000,
  endAt: 1568092000,
  valueDesc: '3',
  unitDesc: '元'
}
export default {
  data () {
    return {
      showList: true,
      chosenCoupon: -1,
      coupons: [coupon1, coupon2, coupon3]
    }
  },

  methods: {
    // 选中优惠券触发的事件
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
      // 如果不是-1就说明使用了优惠券
      if (index !== -1) {
        this.$store.state.couponmoney = this.coupons[index].value / 100
        console.log(this.$store.state.couponmoney)
      } else {
        // 如果是-1就说明没用优惠券 vuex优惠券价格置为0
        this.$store.state.couponmoney = 0
      }
      this.$router.push('/home/cart')
    }
  }
}
</script>
<style lang='less' scoped>
// 修改vant-ui默认的样式
/deep/ .van-overlay {
  display: none;
}
/deep/ .van-coupon-list {
  height: 80%;
}
</style>
