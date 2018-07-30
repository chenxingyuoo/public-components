import publicMenu from './components/public-menu'
import tablePage from './components/table-page'

const components = {
  publicMenu,
  tablePage
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, key)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
