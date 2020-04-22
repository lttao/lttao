// 导入组件
import slider from "./slider";

// 为组件提供 install 安装方法，供按需引入
slider.install = function (Vue) {
  Vue.component(slider.name, slider);
};

export default slider;
