### 安装
采用官方推荐的vite,注意先用npm --version查一下npm版本
``` shell
# npm 6.x
$ npm init vite@latest <project-name> --template vue
# npm 7+，需要加上额外的双短横线
npm init vite@latest <project-name> -- --template vue
```

### 之前vue2兼容vue3，vue2很多原本是在构造函数进行配置的属性、如全局组件、vue实例上的原型属性，都是在构造函数上进行配置，vue3都改到实例上进行配置了。
```js
//Vue2
Vue.prototype.$http = () => {}
//Vue3
const app = createApp({})
app.config.globalProperties.$http = () => {}
```