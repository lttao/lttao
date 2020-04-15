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
      change(value) {
        console.log('父组件接收的：', value);
        this.value.push(value);
        this.$emit("input", this.value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .checkbox-group[checkboxGroup] {
  }
</style>
