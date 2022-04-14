### 安装
采用官方推荐的vite,注意先用npm --version查一下npm版本
``` shell
# npm 6.x
$ npm init vite@latest <project-name> --template vue
# npm 7+，需要加上额外的双短横线
npm init vite@latest <project-name> -- --template vue
```
引入路由
```
npm i vue-router
```
vue-router
### 之前vue2兼容vue3，vue2很多原本是在构造函数进行配置的属性、如全局组件、vue实例上的原型属性，都是在构造函数上进行配置，vue3都改到实例上进行配置了。
```js
//Vue2
Vue.prototype.$http = () => {}
//Vue3
const app = createApp({})
app.config.globalProperties.$http = () => {}
```

组件的传参是按值传递的。

ref有着和reactive不一样的副作用，ref的值在script里存储在value里，在template里会自动提取value，reactive没有多这一层value。
```js
//ref(obj)等价于reactive({value: obj})
const refVal = ref(1);
// refVal.value === 1;
const reactiveVal = reactive(1);
// reactiveVal === 1;
```