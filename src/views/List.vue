<template>
  <div class="list">

    <!-- 通知栏 -->
    <van-notice-bar
      class="noticebar"
      mode="closeable"
      text="好消息，好消息，特大好消息，老陆超市满30最多可享受3元优惠!!~~"
      left-icon="volume-o"
    />

    <!-- 左侧导航条 -->
    <div class="leftList">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.name"
          v-for="item in menuList"
          @click="changeProductList(item.id)"
          :key="item.id"
        />
      </van-sidebar>
    </div>

    <!-- 右侧商品列表 -->
    <div class="right-nav">
      <ul class="right-nav-ul">
        <li class="right-nav-li" v-for="item in productsList" :key="item.id">
          <!-- 图片 -->
          <div class="pic">
            <img :src="item.img" />
          </div>

          <!-- 商品信息 -->
          <div span="20" class="product-info">
            <p class="productname">{{item.name}}</p>
            <p class="specifics">{{item.specifics}}</p>
            <p>
              <b class="market_price">￥{{item.market_price}}</b>
              <s class="price">￥{{item.price}}</s>
            </p>
            <!-- 步进器 -->
            <!-- min的意思是代表最小值是0 不写的话默认是1 -->
            <!-- count:(item._had_pm-0+1)说明 减0是为了转成数字类型 步进器默认的值还是从1开始算的，所以这样写的目的是为了同步步进器的值-->
            <van-stepper
              v-model="item._had_pm"
              min="0"
              class="step"
              @plus="addbeeCart({
               id:item.id,
               count:(item._had_pm-0+1),
               name:item.name,
               img:item.img,
               price:item.market_price-0,
               isSelected:true
               })"
              @minus="minusbeeCart({
               id:item.id,
               count:(item._had_pm-0+1),
               name:item.name,
               img:item.img,
               price:item.market_price-0,
               isSelected:true
               })"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 左侧导航条双向数据绑定的数据
      activeKey: 0,
      // 左侧导航
      menuList: [],
      // 右侧商品列表
      productsList: [],
      // 购物车已经有的数据(回显步进器数值用)
      getlocalStorageList: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // 拿到列表数据
    // 一开始默认的是id = 104751的这个
    async getData (id = 104751) {
      let res = await this.$http.jsonp('http://localhost:3008/list')
      this.menuList = res.data.categories
      this.productsList = res.data.products[id]
      this.getlocalStorageList =
        JSON.parse(localStorage.getItem('beeCart')) || []

      // 如果发现购物车数据count有值 就把productsList对应的项找到,并且把该项had_pm替换成count
      for (var i = 0; i < this.productsList.length; i++) {
        for (var j = 0; j < this.getlocalStorageList.length; j++) {
          if (this.productsList[i].id === this.getlocalStorageList[j].id) {
            this.productsList[i]._had_pm = this.getlocalStorageList[j].count
          }
        }
      }
    },

    // 点击左侧导航条 切换右侧菜单
    changeProductList (id) {
      this.getData(id)
    },

    // 添加一件商品
    addbeeCart (obj) {
      this.$store.dispatch('addOne', obj)
    },
    // 减少一件商品
    minusbeeCart (obj) {
      this.$store.dispatch('minusOne', obj)
    }
  }
}
</script>
<style lang='less' scoped>
.list {
  // 头部和底部都是固定定位 所以要留出50像素
  margin: 50px 0;
  //左侧导航
  .leftList {
    width: 85px;
    position: fixed;
    left: 0;
  }
  //右侧菜单
  .right-nav {
    margin-left: 90px;

    .right-nav-li {
      border-bottom: 1px solid #e1e1e1;
      overflow: hidden;
      padding: 20px 15px;
      position: relative;

      // 图片
      .pic {
        float: left;
        img {
          width: 55px;
          height: 55px;
          margin-top: 10px;
        }
      }

      //商品信息
      .product-info {
        margin-left: 70px;
        .productname {
          font-size: 14px;
        }

        .specifics {
          color: #aaa;
          padding: 5px 0;
        }

        .stepper {
          float: right;
        }

        .market_price {
          color: red;
          font-size: 14px;
        }

        .price {
          color: #aaa;
        }

        // 步进器
        .step {
          float: right;
          margin-right: 10px;
        }
      }
    }

  }
}
</style>
