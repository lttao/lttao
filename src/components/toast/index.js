import Vue from 'vue';
import main from './index.vue';

let Toast = Vue.extend(main);
let instance = null;

const toast = function (option = {}) {
  instance = new Toast({
    data: option
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el); // 插入dom
  return instance.vm;
};

export default toast;
