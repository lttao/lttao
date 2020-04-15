<template>
  <transition name="fade">
    <div v-if="show" class="toast" toast>
      <bg-mask :show="show"></bg-mask>
        <div class="container">
          <div class="text">{{ msg }}</div>
        </div>
    </div>
  </transition>

</template>

<script>
  import bgMask from "../bg-mask/index";
  export default {
    name: "toast",
    components: {
      bgMask
    },
    data() {
      return {
        show: true,
        msg: '提示文字',
        duration: 1500
      }
    },
    mounted() {
      this.hide();
    },
    methods: {
      hide() {
        setTimeout(() => {
          this.show = false
        }, this.duration);
      }
    }
  }
</script>

<style scoped lang="scss">
  .toast[toast] {
    .container {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 999;
      min-width: 120px;
      height: 50px;
      border-radius: 10px;
      background: #fff;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translate(-50%);
    }
  }
</style>
