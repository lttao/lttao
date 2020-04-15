import main from "./index.vue";

let instance = null;

export default {
  install(Vue) {
    if (!instance) {
      let Loading = Vue.extend(main);

      instance = new Loading({
        el: document.createElement("div")
      }); // 通过构造器创建$vm实例，并挂载在div上

      document.body.appendChild(instance.$el);
    }

    instance.show = false;
    let loadingMethods = {
      show(option = {}) {
        if (typeof option === 'string') instance.msg = option;
        else {
          instance.msg = option.msg || "";
          instance.mask = option.mask;
        }
        instance.show = true;
      },
      hide() {
        instance.show = false
      }
    };

    if (!Vue.$loading) {
      Vue.$loading = loadingMethods;
      Vue.prototype.$loading = Vue.$loading;
    } else {
      console.error("$loading 被占用");
    }
  }
}
