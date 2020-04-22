// 导入组件
import checkboxGroup from "./checkboxGroup";

// 为组件提供 install 安装方法，供按需引入
checkboxGroup.install = function (Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup);
};

export default checkboxGroup;
