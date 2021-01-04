import { App } from 'vue'
import EluiChinaAreaDht from './src/index'
import ChinaArea from './src/ChinaArea'

export { EluiChinaAreaDht }

EluiChinaAreaDht.install = (app: App): void => {
  app.component(EluiChinaAreaDht.name, EluiChinaAreaDht)
}
EluiChinaAreaDht.ChinaArea = ChinaArea

export default EluiChinaAreaDht
