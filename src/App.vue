<template>
  <div class="app">
    <!--默认使用-->
    <elui-china-area-dht @change="onChange"></elui-china-area-dht>
    <!--带isall参数和leave参数示例-->
    <elui-china-area-dht isall :leave="2" @change="onChange"></elui-china-area-dht>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EluiChinaAreaDht } from './EluiChinaAreaDht/index'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
export default defineComponent({
  name: 'app',
  components: {
    EluiChinaAreaDht,
  },
  setup() {
    function onChange(e: number[]) {
      const one = chinaData[e[0]]
      const two = chinaData[e[1]]
      console.log(one, two)
    }
    return {
      onChange,
    }
  },
})
</script>
