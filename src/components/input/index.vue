<template>
  <div class="input" input>
    <input
        ref="input"
        :value="value"
        @input="input"
        @focus="focus"
        @blur="blur"
        type="text"
        :placeholder="placeholder"
    >
    <div @mousedown.prevent="del" v-show="delShow" class="delete">X</div>
  </div>

</template>

<script>
  export default {
    name: "ltInput",
    props: {
      placeholder: String,
      value: [ String, Number ]
    },
    data() {
      return {
        delShow: false
      }
    },
    methods: {
      input(e) {
        let { value } = e.target;
        this.delShow = !!value;
        this.$emit("input", value);
      },
      focus() {
        this.delShow = !!this.value;
      },
      blur() {
        this.delShow = false;
      },
      del() {
        this.delShow = false;
        this.$emit("input", "");
      }
    }
  }
</script>

<style scoped lang="scss">
  .input[input] {
    border-radius: 5px;
    border: solid 1px #ccc;
    padding-right: 6px;
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
    .delete {
      cursor: pointer;
    }
  }
</style>
