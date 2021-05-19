import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = "https://vuejsvueresource-bae8f-default-rtdb.europe-west1.firebasedatabase.app/users.json";
Vue.http.interceptors.push((req, next)=> {
  console.log(req.method);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
