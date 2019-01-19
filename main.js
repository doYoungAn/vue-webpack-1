import Vue from 'vue';
import App from './src/App.vue';
import router from './src/router';

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
