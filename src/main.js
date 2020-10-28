import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './store/bus'

Vue.config.productionTip = false;

//引入ui库
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(Bus);
//引入接口文件
import httpServe from './server';
//引入字体库
import './assets/font/iconfont.css';

Vue.prototype.$https = httpServe;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
