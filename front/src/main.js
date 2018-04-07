// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'Axios';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import router from './router'
var server = require('@/server')

Vue.use(ElementUi);
Vue.config.productionTip = false
Vue.prototype.$http = Axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})