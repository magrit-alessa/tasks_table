// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
 Vue.filter('formatDate', function(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY hh:mm')
      }
})

new Vue({
  el: '#app',
  data: function () {
        return {
            
        }
    },
  router,
  store,
  components: { App },
  template: '<App/>'
})
