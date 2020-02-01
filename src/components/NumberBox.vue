<template>
  <div class="numberbox">
    <span class="nb-left">-</span>
    <div
      @click="minusbeeCart({
      id:item.id,
      name:item.name,
      img:item.img,
      price:item.market_price-0,
      isSelected:true
      })"
    >{{count}}</div>
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
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      count: 0
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
    },
    // 减少一件商品
    minusbeeCart (obj) {
      this.count--
      if (this.count <= 0) {
        this.count = 0
      }
      console.log(obj)
      obj.count = this.count
      this.$store.dispatch('minusOne', obj)
    }
  },
  computed: {
    // countNum () {
    //   let r = this.$store.state.beeCartList.filter(
    //     element => element.id === this.item.id
    //   )
    //   return r[0] ? (r[0].count > 0 ? r[0].count : 0) : 0
    // }
  }
}
</script>

<style  lang='less' scoped>
.numberbox {
  float: right;
  div,
  span {
    float: left;
    font-size: 16px;
  }
  div {
    margin: 0 5px;
  }
}
</style>
