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

Hbf.install = install
export default Hbf
