<template>
  <div class="slider" slider>
    <div
        :style="`left: 0; right: ${sliderLen - sliderPlace}px;`"
        class="slide-track"
    ></div>
    <div
        @mousedown="sliderMove($event)"
        :style="`left: ${sliderPlace}px`"
        class="slider-btn"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ltSlider",
  props: {
    value: Number,
    width: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      sliderPlace: 0,
      sliderLen: this.width - 10
    };
  },
  methods: {
    sliderMove(e) {
      let { clientX, currentTarget: { offsetLeft } } = e;
      // 算出鼠标相对元素的位置
      let disX = clientX - offsetLeft;

      // 鼠标按下并移动的事件
      document.onmousemove = (e) => {
        let left = e.clientX - disX;
        if (left <= 0) left = 0;
        if (left >= this.sliderLen) left = this.sliderLen;
        // console.log(left);
        let result = parseInt(left / this.sliderLen * 100)
        this.$emit("input", result)
        this.sliderPlace = left;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>

<style scoped lang="scss">
.slider[slider] {
  position: relative;
  width: 200px;
  height: 5px;
  border-radius: 5px;
  background: #ccc;
  & > .slide-track {
    position: absolute;
    height: 100%;
    border-radius: 5px;
    background: #4c84ff;
  }
  & > .slider-btn {
    position: absolute;
    top: -50%;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4c84ff;
    cursor: pointer;
  }
}
</style>
