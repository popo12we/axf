<template>
  <div class="cart">

    <!-- 收件人信息 -->
    <van-row class="news">
      <van-row class="consignee">
        <van-col span="6">收货人</van-col>
        <van-col span="18" class="tl">陆俊慧先生</van-col>
      </van-row>
      <van-row class="tel">
        <van-col span="6">电话</van-col>
        <van-col span="18" class="tl">188********</van-col>
      </van-row>
      <van-row class="address">
        <van-col span="6">地址</van-col>
        <van-col span="18" class="tl">上海市浦东新区航都路18号--黑马程序员</van-col>
      </van-row>
    </van-row>

     <!-- 购物车列表 -->
    <van-row class="cartlistcomputed">
      <van-col span="6" class="all">一共56件商品</van-col>
       <van-col span="6" class="coupon">优惠券</van-col>
      <van-col span="12" class="settle">
        共123元
        <van-button type="warning">结算</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<style lang="less" scoped>
.cart {
  // 头部和底部都是固定定位 所以要留出50像素
  margin: 50px 0;

  // 收件人信息
  .news {
    padding:20px 50px;
  }
  .tel{
    margin:20px 0;
  }

  // 购物车列表
  .cartlistcomputed{
    margin-top:20px;
    padding: 20px;
    border:2px solid #00aabb;
    .all,.coupon{
      height: 44px;
      line-height: 44px;
    }
    .settle{
       text-align: right;
    }
  }
}
</style>
