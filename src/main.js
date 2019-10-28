import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
import Axios from "axios";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)
import { api } from '@common/js/http';
import global from '@common/js/global';
import validator from '@common/js/validator';

/**全局css */
import "@common/css/base.styl";

/**剪切插件 */
import clipboard from 'clipboard';

//注册到vue原型上
Vue.prototype.clipboard = clipboard;
Vue.prototype.baseUrl = 'http://101.132.68.84:9080'
Vue.prototype.api = api
Vue.prototype.Global = global
Vue.prototype.Validator = validator

/**登录拦截 */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!VueCookies.get("token")) {
      router.replace({
        path: '/login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
  next();
});

/**渲染 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
