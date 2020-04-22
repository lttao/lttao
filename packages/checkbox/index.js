// 导入组件
import checkbox from "./checkbox";

// 为组件提供 install 安装方法，供按需引入
checkbox.install = function (Vue) {
  Vue.component(checkbox.name, checkbox);
};

export default checkbox;
