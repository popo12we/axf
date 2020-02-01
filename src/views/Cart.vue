<template>
  <div class="cart">
    <!-- 收件人信息 -->
    <van-row class="news">
      <van-row class="consignee">
        <van-col span="3">收货人</van-col>
        <van-col span="5" class="tl">陆俊慧先生</van-col>
        <van-col span="16">地址:{{this.address}}</van-col>
      </van-row>
    </van-row>

    <!-- 购物车商品展示 -->
    <van-row class="cartlist">
      <ul>
        <li v-for="item in beeCartList" class="oneproduct" :key="item.id">
          <van-swipe-cell>
            <van-col span="2">
              <!-- 字体图标 -->
              <svg
                class="icon iconchoose"
                aria-hidden="true"
                v-if="item.isSelected"
                @click="isSelectedOneProduct(item.id)"
              >
                <use xlink:href="#icon-gou" />
              </svg>
              <svg
                class="icon iconchoose"
                aria-hidden="true"
                @click="isSelectedOneProduct(item.id)"
                v-if="!item.isSelected"
              >
                <use xlink:href="#icon-caozuojiemiantubiao---_yuan" />
              </svg>
            </van-col>
            <van-col span="2">
              <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" class="img" />
            </van-col>
            <van-col span="20" class="product-info">
              <van-col span="16">{{item.name}}</van-col>
               <NumberBox :item="item"></NumberBox>
            </van-col>

            <template slot="right">
              <van-button square type="danger" text="删除" @click="delOneProduct({id:item.id})" />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
    </van-row>

    <!-- 地址选择栏 -->
    <van-popup v-model="isShowAddress" closeable position="bottom" :style="{ height: '20%' }">
      <div class="chooseAddress">
        <van-area :area-list="areaList" @confirm="confirmAddress" @cancel="cancelAddress" />
      </div>
    </van-popup>

    <!-- 结算栏 -->
    <van-submit-bar :price="allPrice*100" button-text="提交订单" @submit="onSubmit">
      <span class="coupon" @click="linkToCoupon" v-if="isShowCoupon">优惠券</span>
      <span class="address" @click="linkToAddress">配送地址</span>
    </van-submit-bar>
    <van-popup
      v-model="show"
      :style="{ width:'30%',height: '10%',textAlign:'center',lineHeight:'70px'}"
    >一共{{allPrice}}元</van-popup>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NumberBox from '../components/NumberBox'
import areaList from '../tools/area.json'
export default {
  components: {
    NumberBox
  },
  data () {
    return {
      // 购物车数据
      beeCartList: JSON.parse(localStorage.getItem('beeCart')) || [],
      // 控制弹出层的显示和隐藏
      show: false,
      // 地址的json数据
      areaList: areaList,
      // 控制地址栏显示和隐藏
      isShowAddress: false,
      // 具体地址
      address: ''
    }
  },
  methods: {
    // 添加一件商品
    addbeeCart (obj) {
      this.$store.dispatch('addOne', obj)
    },
    // 去掉商品
    minusbeeCart (obj) {
      this.$store.dispatch('minusOne', obj)
    },
    // 展示弹出层
    onSubmit () {
      // 显示出弹出层
      this.show = true
    },
    delOneProduct (obj) {
      this.$store.dispatch('delOne', obj)
      // 一定要写这行不然视图不会更新
      this.beeCartList = JSON.parse(localStorage.getItem('beeCart'))
    },
    // 跳转到优惠券页面
    linkToCoupon () {
      this.$router.push('/coupon')
    },
    // 左侧字体图标选中与未选中的对整个购物车的逻辑
    isSelectedOneProduct (id) {
      let product = this.beeCartList.find(item => item.id === id)
      product.isSelected = !product.isSelected
      this.$store.dispatch('updateOne', product)
    },
    // 展示配送地址
    linkToAddress () {
      this.isShowAddress = true
    },

    // 确定地址
    confirmAddress (e) {
      this.address = e[0].name + e[1].name + e[2].name
      this.isShowAddress = false
    },

    // 取消地址
    cancelAddress (e) {
      this.isShowAddress = false
    }
  },
  computed: {
    ...mapGetters(['allPrice', 'allCount', 'isShowCoupon'])
  }
}
</script>
<style lang='less' scoped>
.cart {
  // 头部和底部都是固定定位 所以要留出50像素
  margin: 50px 0;

  // 收件人信息
  .news {
    border: 2px solid #00aabb;
    padding: 20px 10px;
  }
  .tel {
    margin: 20px 0;
  }

  .cartlist {
    padding: 20px 0 20px 20px;
    .oneproduct {
      height: 40px;
      line-height: 40px;
      box-sizing: content-box;
      .product-info {
        height: 100%;
      }
    }
  }

  // 购物车信息
  .all,
  .coupon,
  .address {
    height: 44px;
    line-height: 44px;
    margin-left: 20px;
  }
  .settle {
    text-align: right;
    float: right;
  }

  // 字体图标样式
  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top: 8px;
  }

  .van-submit-bar {
    bottom: 50px;
    background-color: #f8f8f8;
  }

  // 地址选择栏
  .chooseAddress {
    position: fixed;
    bottom: 100px;
    width: 100%;
  }
}
</style>
