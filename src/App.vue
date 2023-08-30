<template>
  <div class="app">
    <!--默认使用-->
    <elui-china-area-dht @change="onChange" v-model="showVal"></elui-china-area-dht>
    <!--带isall参数和leave参数示例-->
    <elui-china-area-dht isall :leave="2" @change="onChange"></elui-china-area-dht>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EluiChinaAreaDht } from './EluiChinaAreaDht/index'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
export default defineComponent({
  name: 'app',
  components: {
    EluiChinaAreaDht,
  },
  setup() {
    const showVal = ref(['110000', '110100', '110101'])

    function onChange(e: number[]) {
      const one = chinaData[e[0]]
      const two = chinaData[e[1]]
      console.log(showVal.value, one, two)
    }
    return {
      onChange,
      showVal,
    }
  },
})
</script>
