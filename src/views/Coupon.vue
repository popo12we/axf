<template>
  <div class="coupon">
    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"  />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @change="onChange"
        @exchange="onExchange"
        :show-exchange-bar=false
      />
    </van-popup>
  </div>
</template>
<script>
const coupon1 = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 100,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1',
  unitDesc: '元'
}
const coupon2 = {
  available: 2,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 200,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '2',
  unitDesc: '元'
}
const coupon3 = {
  available: 3,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 300,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
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
      if (index !== -1) {
        this.$store.state.couponmoney = this.coupons[index].value / 100
      }
      this.$router.push('/home/cart')
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .van-overlay{
  display:none
}
/deep/ .van-coupon-list{
   height:80%;
}
</style>
