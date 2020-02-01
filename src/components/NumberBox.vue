<template>
  <div class="numberbox">
    <span class="nb-left" @click="minusbeeCart({
      id:item.id,
      name:item.name,
      img:item.img,
      price:item.market_price-0,
      isSelected:true
      })">-</span>
    <div>{{count}}</div>
    <span
      class="nb-right"
      @click="addbeeCart({
      id:item.id,
      name:item.name,
      img:item.img,
      price:item.market_price-0,
      isSelected:true
      })"
    >+</span>
    <Ball :show="show"></Ball>
  </div>
</template>

<script>
import Ball from './Ball'
export default {
  props: {
    item: Object
  },
  components: {
    Ball
  },
  data () {
    return {
      count: 0,
      show: false
    }
  },
  created () {
    this.initCount()
  },
  methods: {
    initCount () {
      let r = this.$store.state.beeCartList.filter(
        element => element.id === this.item.id
      )
      this.count = r[0] ? (r[0].count > 0 ? r[0].count : 0) : 0
    },
    addbeeCart (obj) {
      this.count++
      obj.count = this.count
      this.$store.dispatch('addOne', obj)
      this.show = true
      setTimeout(() => {
        this.show = false
      })
    },
    // 减少一件商品
    minusbeeCart (obj) {
      this.count--
      if (this.count <= 0) {
        this.count = 0
      }
      obj.count = this.count
      this.$store.dispatch('minusOne', obj)
    },
    hideBall () {
      this.show = false
    }
  }
}
</script>

<style  lang='less' scoped>
.numberbox {
  float: right;
  position: relative;
  div,
  span {
    float: left;
  }
  div {
    margin: 0 10px;
    height: 24px;
    line-height: 24px;
  }
  span {
    // padding: 2px;
    display: block;
    width: 24px;
    height: 24px;;
    background-color: #00a0dc;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 24px;
    border-radius: 50%;
  }
}
</style>
