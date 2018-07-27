import Vue from 'vue'
import App from '../example/App'
import iView from 'iview'

Vue.use(iView)

new Vue({
  el: '#app',
  components: {
    App
  },
  render: h => h(App)
})
