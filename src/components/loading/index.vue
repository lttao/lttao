<template>
  <transition name="fade">
    <div v-if="show" class="loading" loading>
      <bg-mask :show="mask"></bg-mask>
      <div class="container">
        <div class="text">{{ msg }}</div>
      </div>
    </div>
  </transition>

</template>

<script>
  import bgMask from "../bg-mask/index";
  export default {
    name: "loading",
    components: {
      bgMask
    },
    data() {
      return {
        show: true,
        mask: true,
        msg: '提示文字',
        duration: 1500
      }
    }
  }
</script>

<style scoped lang="scss">
  .loading[loading] {
    .container {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 999;
      min-width: 120px;
      height: 120px;
      border-radius: 10px;
      background: #f2f2f2;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translate(-50%);
    }
  }
</style>
