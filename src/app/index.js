import Vue from 'vue';
import App from './app.vue';

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false;

import axios from 'axios';
import VueAxios from 'vue-axios';

import babelPolyfill from 'babel-polyfill';

Vue.use(VueAxios, axios);

new Vue({
    render: h => h(App)
}).$mount('#app');