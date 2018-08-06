import publicMenu from './components/public-menu'
import tablePage from './components/table-page'
import sliderCustom from './components/slider-custom'

const components = {
  publicMenu,
  tablePage,
  sliderCustom
}
const Hbf = Object.assign({}, components)
const install = function (Vue, opts) {
  if (install.installed) return

  Object.keys(components).forEach(component => {
    Vue.component(component, component)
  })
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Hbf.install = install

// 输出default变量，用于全量引入
export default Hbf
// 输出各个组件，用于按需引入
export {
  publicMenu,
  tablePage,
  sliderCustom,
}
