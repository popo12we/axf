<template>
  <div class="cart">
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
  </div>
</template>

<style lang="less" scoped>
.cart {
  // 头部和底部都是固定定位 所以要留出50像素
  margin: 50px 0;
  .news {
    padding:20px 50px;
  }
  .tel{
    margin:20px 0;
  }
}
</style>
