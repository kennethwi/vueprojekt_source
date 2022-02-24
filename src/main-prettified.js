import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

// import Vue from "vue";
// import VuePageTransition from "vue-page-transition";
//App.use(VuePageTransition);

//const store = Vuex.createStore({ state });
//vue.use(store);

createApp(App).use(router).use(store).mount('#app')

import { registerSW } from 'virtual:pwa-register'
registerSW()
