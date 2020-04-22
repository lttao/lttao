// 导入组件
import input from "./input";

// 为组件提供 install 安装方法，供按需引入
input.install = function (Vue) {
  Vue.component(input.name, input);
};

export default input;
