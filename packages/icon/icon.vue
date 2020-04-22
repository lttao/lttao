<template>
  <div class="icon" icon>
    <i class="iconfont" :class="className" :style="`font-size: ${size}; color: ${color};`"></i>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: {
    type: String,
    size: {
      type: String,
      default: "10px"
    },
    color: {
      type: String,
      default: "#ccc"
    }
  },
  computed: {
    className() {
      return (() => {
        for (let key in this.iconData) {
          let item = this.iconData[key];
          if (this.type === item.name) return item.icon;
        }
      })();
    }
  },
  data() {
    return {
      iconData: [
        { name: "close", icon: "icon-guanbi" },
        { name: "see", icon: "icon-see" },
        { name: "up", icon: "icon-up" },
        { name: "down", icon: "icon-down" },
        { name: "back", icon: "icon-back" },
        { name: "link", icon: "icon-link" },
        { name: "search", icon: "icon-search" },
        { name: "list", icon: "icon-liebiao" }
      ]
    };
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "./../../icon/iconfont.css";
.icon[icon] {
}
</style>
