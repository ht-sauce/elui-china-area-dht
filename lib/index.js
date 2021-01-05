import EluiChinaAreaDht from './src/index';
import ChinaArea from './src/ChinaArea';
export { EluiChinaAreaDht };
EluiChinaAreaDht.install = (app) => {
    app.component(EluiChinaAreaDht.name, EluiChinaAreaDht);
};
EluiChinaAreaDht.ChinaArea = ChinaArea;
export default EluiChinaAreaDht;
