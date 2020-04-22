<template>
  <div @click="change" class="checkbox" checkbox>
    <div :class="isChecked ? 'checkbox-checked' : ''" class="checkbox-btn"></div>
    <span class="checkbox-label">
      <slot></slot>
    </span>
  </div>

</template>

<script>
export default {
  name: "ltCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: [ String, Number ]
  },
  computed: {
    // 是否被Group组件包裹
    isGroup() {
      // 拿到父组件的名称
      const { $parent: { $options: { name: parentName } } } = this;
      return parentName === "checkboxGroup";
    },
    // 是否选中
    isChecked() {
      const { isGroup, value } = this;
      if (!isGroup) return value;

      const { name, $parent: { value: parentValue } } = this;
      return parentValue.some(item => item === name);
    }
  },
  methods: {
    change() {
      const { isGroup } = this;
      if (isGroup) {
        // console.log("被Group组件包裹");
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
  display: inline-flex;
  align-items: center;
  .checkbox-btn {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: solid 1px #ccc;
  }
  .checkbox-checked {
    border: solid 1px #4c84ff;
    background: #4c84ff;
  }
  .checkbox-label {
    padding: 0 10px;
  }
}
</style>
