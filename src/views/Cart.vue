<template>
  <div class='cart'>
    <!-- 收件人信息 -->
    <van-row class='news'>
      <van-row class='consignee'>
        <van-col span='6'>收货人</van-col>
        <van-col span='18' class='tl'>陆俊慧先生</van-col>
      </van-row>
      <van-row class='tel'>
        <van-col span='6'>电话</van-col>
        <van-col span='18' class='tl'>188********</van-col>
      </van-row>
      <van-row class='address'>
        <van-col span='6'>地址</van-col>
        <van-col span='18' class='tl'>上海市浦东新区航都路18号--黑马程序员</van-col>
      </van-row>
    </van-row>

    <!-- 购物车商品展示 -->
    <van-row class='cartlist'>
      <ul>
        <li v-for='item in beeCartList' class='oneproduct' :key='item.id'>
          <van-swipe-cell>
            <van-col span='2'>
              <!-- 字体图标 -->
                 <svg class='icon iconchoose' aria-hidden='true'  v-if="item.isSelected" @click='isSelectedOneProduct(item.id)'>
                  <use xlink:href='#icon-gou'  />
                </svg>
                 <svg class='icon iconchoose' aria-hidden='true' @click='isSelectedOneProduct(item.id)' v-if="!item.isSelected">
                  <use xlink:href='#icon-caozuojiemiantubiao---_yuan'/>
                </svg>

            </van-col>
            <van-col span='2'>
              <img src='https://img.yzcdn.cn/vant/t-thirt.jpg' class='img' />
            </van-col>
            <van-col span='20' class='product-info'>
              <van-col span='16'>{{item.name}}</van-col>
              <van-stepper
                span='8'
                v-model='item.count'
                min='0'
                @plus='addbeeCart({
               id:item.id,
               count:(item._had_pm-0+1),
               name:item.name,
               img:item.img,
               price:item.market_price-0,
               isSelected:true,
               })'
                @minus='minusbeeCart({
               id:item.id,
               count:(item._had_pm-0+1),
               name:item.name,
               img:item.img,
               price:item.market_price-0,
               isSelected:true,
               })'
              />
            </van-col>

            <template slot='right'>
              <van-button square type='danger' text='删除' @click='delOneProduct({id:item.id})' />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
    </van-row>

    <!-- 购物车信息 -->
    <van-row class='cartlistcomputed'>
      <van-col span='6' class='all'>一共{{allCount}}件商品</van-col>
      <van-col span='6' class='coupon' @click='linkToCoupon' v-if='isShowCoupon'>优惠券</van-col>
      <van-col span='12' class='settle'>
        共{{allPrice}}元
        <van-button type='warning' @click='showPopup'>结算</van-button>
        <van-popup
          v-model='show'
          :style="{ width:'30%',height: '10%',textAlign:'center',lineHeight:'70px'}"
        >一共{{allPrice}}元</van-popup>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // 购物车数据
      beeCartList: JSON.parse(localStorage.getItem('beeCart')) || [],
      // 控制弹出层的显示和隐藏
      show: false
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
    showPopup () {
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
    padding: 20px 50px;
  }
  .tel {
    margin: 20px 0;
  }

  .cartlist {
    border: 2px solid #00aabb;
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
  .cartlistcomputed {
    margin-top: 20px;
    padding: 20px;
    .all,
    .coupon {
      height: 44px;
      line-height: 44px;
    }
    .settle {
      text-align: right;
      float: right;
    }
  }
  // 字体图标样式
  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top:8px;
  }
}
</style>
