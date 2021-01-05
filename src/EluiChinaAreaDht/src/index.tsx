import { defineComponent, ref, getCurrentInstance } from 'vue'
import ChinaArea from './ChinaArea'
const EluiChinaAreaDht = defineComponent({
  name: 'EluiChinaAreaDht',
  props: {
    isall: Boolean,
    leave: {
      type: Number,
      default: 3,
    },
  },
  setup(props, ctx) {
    const chinaArea = new ChinaArea({ leave: props.leave, isall: props.isall })

    const options = ref(chinaArea.chinaData())

    return () => <el-cascader {...ctx.attrs} options={options.value} v-slots={ctx.slots} />
  },
})

export default EluiChinaAreaDht
