import Toast  from "./Toast";

const obj = {};

obj.install=function (Vue){

  //创建构造器
  const constructor = Vue.extend(Toast);

  //创建一个组件对象
  const toast = new constructor();

  //将组件手动挂载到一个元素上
  toast.$mount(document.createElement('div'));

  //toast.$el对象的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast=toast;

}

export default obj;