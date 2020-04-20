<template>
  <div class="about">
    <lt-input v-model="value" placeholder="请输入" /> <div>{{ value }}</div>
    <checkbox v-model="checked">{{ checked }}</checkbox>

    <checkbox-group v-model="checkboxValue">
      <checkbox :name="0">select</checkbox>
      <checkbox :name="1">select</checkbox>
      <checkbox :name="2">select</checkbox>
    </checkbox-group>
    <div>{{ checkboxValue }}</div>
    <div @click="showLoading">显示加载</div>
    <div @click="hideLoading">隐藏加载</div>
    <div @click="showTimeLoading">显示加载（2s自动关闭）</div>
    <h1 @click="showToast" style="position: relative; z-index: 9;">显示toast</h1>
    <slider v-model="sliderValue"></slider>
    <div>{{ sliderValue }}</div>
  </div>
</template>

<script>
import checkboxGroup from "@/components/checkbox-group";
import checkbox from "@/components/checkbox";
import ltInput from "@/components/input";
import slider from "@/components/slider/slider";
export default {
  name: "about",
  components: {
    checkbox,
    checkboxGroup,
    ltInput,
    slider
  },
  data() {
    return {
      value: "",
      checked: false,
      checkboxValue: [1],
      sliderValue: 0
    };
  },
  methods: {
    showToast() {
      this.$toast({
        msg: "成功"
      });
    },
    showLoading() {
      this.$loading.show({
        msg: "加载中..",
        mask: false
      });
    },
    hideLoading() {
      this.$loading.hide();
    },
    showTimeLoading() {
      this.$loading.show({
        msg: "加载中..",
        mask: true
      });
      setTimeout(() => {
        this.$loading.hide();
      }, 2000);
    }
  }
};
</script>
