<template>
  <transition name="bounce">
    <div class="ball" v-if="show"></div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}

</script>

<style lang='less' scoped>
.ball {
  margin: 0 !important;
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 600;
  opacity: 1;
  z-index: 999;
}

.bounce-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    top: 600px;
    z-index: 997;
    opacity: 1;
  }
  100% {
    top: 0px;
    z-index: 997;
    opacity: 0;
  }
}
</style>
