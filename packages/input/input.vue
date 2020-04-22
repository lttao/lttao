<template>
  <div @mouseover="mouseover" @mouseleave="mouseleave" :style="`width: ${width}`" class="input" input>
    <input
        ref="input"
        :value="value"
        @input="input"
        @focus="focus"
        @blur="blur"
        @keyup.enter="enter"
        :type="type"
        :placeholder="placeholder"
    >
    <div class="action-container">
      <icon @mousedown.native.prevent="del" type="close" v-show="delShow" class="action"></icon>
      <icon v-if="isPassWord" type="see" class="action"></icon>
    </div>
  </div>

</template>

<script>
  import icon from "./../icon/icon"
export default {
  name: "ltInput",
  components: {
    icon
  },
  props: {
    placeholder: String,
    value: [ String, Number ],
    width: {
      type: String,
      default: "100%"
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      delShow: false, // 是否显示删除按钮
      isFocus: false // 是否获取焦点
    };
  },
  computed: {
    isPassWord() {
      return this.type === "password";
    }
  },
  methods: {
    // 实现双向绑定
    input(e) {
      let { value } = e.target;
      this.delShow = !!value;
      this.$emit("input", e);
      this.$emit("input", value);
    },
    // 获取焦点
    focus() {
      this.isFocus = true;
      this.delShow = !!this.value;
    },
    // 失去焦点
    blur() {
      this.isFocus = false;
      this.delShow = false;
    },
    // 鼠标进入
    mouseover() {
      this.delShow = !!this.value;
    },
    // 鼠标离开
    mouseleave() {
      if (!this.isFocus) this.delShow = false;
    },
    // 删除
    del() {
      this.delShow = false;
      this.$emit("input", "");
    },

    // 暴露给外部的方法
    enter(e) {
      this.$emit("enter", e);
    },
    change(e) {
      this.$emit("change", e)
    }
  }
}
</script>

<style scoped lang="scss">
.input[input] {
  position: relative;
  border-radius: 5px;
  border: solid 1px #ccc;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  input {
    flex: 1;
    height: 25px;
    background: none;
    border: none;
    outline:none;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .action-container {
    padding-right: 10px;
    .action {
      cursor: pointer;
    }
  }
}
</style>
