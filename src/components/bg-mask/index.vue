<template>
  <transition name="fade">
    <div v-show="show" class="mask" mask></div>
  </transition>
</template>

<script>
  export default {
    name: "bgMask",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .mask[mask] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .6);
  }
</style>
