import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import VuexPersistence from 'vuex-persist'
import FieryVue from 'fiery-vue'
Vue.use(FieryVue)
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyC-1nKYK_5HYn11g9AiP5BL0RqO6MUYfcM",
      authDomain: "global-legal-hack.firebaseapp.com",
      databaseURL: "https://global-legal-hack.firebaseio.com",
      projectId: "global-legal-hack",
      storageBucket: "global-legal-hack.appspot.com",
      messagingSenderId: "1057686815977",
      appId: "1:1057686815977:web:ac5c00c4387f7fc9d7dc78"  
    })
  }
}).$mount('#app')
new VuexPersistence({
  storage: window.localStorage
})