import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// https://github.com/rstacruz/nprogress
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate/src'

Vue.use(Vuelidate)

/* Global mixin exemple applied to every components
 * Global mixin must be declare before the new Vue instance to work */
// Vue.mixin({
//   mounted() {
//     console.log('I am mixed into every component.')
//   }
// })
// However, the use cases for a global mixin are rare and it is highly recommended that you use global mixins with
// extreme caution or simply avoid using them at all since they will be affecting literally every component at every
// level of your app.

// https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
