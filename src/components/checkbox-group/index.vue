<template>
  <div class="checkbox-group" checkboxGroup>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "checkboxGroup",
    props: {
      value: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      change(childValue) {
        let { value } = this;
        // console.log('父组件接收的：', childValue, value, value.indexOf(childValue));
        let findIndex = value.indexOf(childValue);
        if (findIndex === -1) value.push(childValue);
        else value.splice(findIndex, 1);

        this.$emit("input", value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .checkbox-group[checkboxGroup] {
  }
</style>
