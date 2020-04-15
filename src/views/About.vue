<template>
  <div class="about">
    <checkbox v-model="checked">{{ checked }}</checkbox>

    <checkbox-group v-model="checkboxValue">
      <checkbox :name="1">select</checkbox>
      <checkbox :name="2">select</checkbox>
    </checkbox-group>
    <div>{{ checkboxValue }}</div>
    <div @click="showLoading">加载</div>
    <div @click="hideLoading">隐藏</div>
    <h1 @click="showToast" style="position: relative; z-index: 9;">This is an about page</h1>
  </div>
</template>

<script>
  import checkboxGroup from  "@/components/checkbox-group"
import checkbox from "@/components/checkbox"
  export default {
    name: "about",
    components: {
      checkbox,
      checkboxGroup
    },
    data() {
      return {
        checked: false,
        checkboxValue: []
      }
    },
    methods: {
      showToast() {
        this.$toast({
          msg: '成功'
        })
      },
      showLoading() {
        this.$loading.show({
          msg: "加载中..",
          mask: false
        })
      },
      hideLoading() {
        this.$loading.hide()
      }
    }
  };
</script>
