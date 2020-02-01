<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <h1>黑马程序员--老陆超市</h1>
    </div>
    <router-view />

    <!-- 底部 -->
    <div class="footer">
      <ul>
        <li>
          <router-link to="/" class="bgi bgi1">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home/list" class="bgi bgi2">
            <p>闪送超市</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="bgi bgi4">
            <p>我的</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home/cart" class="cartShow bgi bgi3">
            <div class="cartNum">{{allCount}}</div>
            <p>购物车</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['allPrice', 'allCount'])
  }
}
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
  ul {
    overflow: hidden;
    height: 100%;
  }
  li {
    float: left;
    width: 25%;
    height: 100%;
    a {
      width: 100%;
      height: 100%;
      display: block;
      p {
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }

  .bgi1 {
    background: url("../assets/images/menu-icon/navs-item-home.png") no-repeat
      center top;
    background-size: 25px 25px;
  }
  .bgi2 {
    background: url("../assets/images/menu-icon/navs-item-cart.png") no-repeat
      center top;
     background-size: 25px 25px;
    &.active {
      background: url("../assets/images/menu-icon/navs-item-cart-active.png")
        no-repeat center top;
       background-size: 25px 25px;
    }
  }
  .bgi3 {
    background: url("../assets/images/menu-icon/navs-item-menu.png") no-repeat center top;
     background-size: 25px 25px;
    &.active {
      background: url("../assets/images/menu-icon/navs-item-menu-active.png")
        no-repeat center top;
       background-size: 25px 25px;
    }
  }

  .bgi4 {
    background: url("../assets/images/menu-icon/navs-item-mine.png") no-repeat center top;
     background-size: 25px 25px;
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
