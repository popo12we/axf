<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <h1>黑马程序员--老陆超市</h1>
    </div>
    <router-view />

    <!-- 底部 -->
    <div class="footer">
      <van-row>
        <van-col span="6">
          <div class="bgi bgi1"></div>
          <p>首页</p>
        </van-col>
        <router-link :to="{name:'list'}">
          <van-col span="6">
            <div class="bgi bgi2"></div>
            <p>闪送超市</p>
          </van-col>
        </router-link>
        <router-link :to="{name:'cart'}">
          <van-col span="6" class="cartShow">
            <div class="bgi bgi3"></div>
            <div class="cartNum">10</div>
            <p>购物车</p>
          </van-col>
        </router-link>
        <van-col span="6">
          <div class="bgi bgi4"></div>
          <p>我的</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
// 头部样式
.header {
  width: 100%;
  height: 50px;
  background-color: #ffd600;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

// 底部样式
.footer {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  background-color: #f8f8f8;
  .bgi {
    display: block;
    height: 25px;
    width: 25px;
    margin: 0 auto;
  }
  p {
    font-size: 12px;
    line-height: 25px;
  }
  .bgi1 {
    background: url("../assets/images/menu-icon/navs-item-home.png");
    background-size: 100% 100%;
  }
  .bgi2 {
    background: url("../assets/images/menu-icon/navs-item-cart.png");
    background-size: 100% 100%;
  }
  .bgi3 {
    background: url("../assets/images/menu-icon/navs-item-menu.png");
    background-size: 100% 100%;
  }
  .bgi4 {
    background: url("../assets/images/menu-icon/navs-item-mine.png");
    background-size: 100% 100%;
  }
  .cartShow {
    position: relative;
    .cartNum {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: red;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      color: #fff;
      font-size: 12px;
      right: 30%;
      top: 0;
    }
  }
}
</style>
