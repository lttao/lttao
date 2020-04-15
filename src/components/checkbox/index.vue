<template>
  <div @click="change" class="checkbox" checkbox>
    <div :class="value ? 'checkbox-checked' : ''" class="checkbox-btn"></div>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "index",
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: [ String, Number ]
    },
    computed: {
      // 是否被Group组件包裹
      isGroup () {
        return this.$parent.$options._componentTag === "checkbox-group";
      }
    },
    methods: {
      change() {
        const { isGroup } = this;
        if (isGroup) {
          console.log("被Group组件包裹");
          this.$parent.change(this.name);
        } else {
          this.$emit("input", !this.value);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .checkbox[checkbox] {
    cursor: pointer;
    display: flex;
    align-items: center;
    .checkbox-btn {
      margin-right: 10px;
      width: 15px;
      height: 15px;
      border-radius: 2px;
      border: solid 1px #ccc;
    }
    .checkbox-checked {
      border: solid 1px #4c84ff;
      background: #4c84ff;
    }
  }
</style>
