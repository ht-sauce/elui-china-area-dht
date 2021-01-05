<template>
  <div class="app">
    <!--默认使用-->
    <elui-china-area-dht @change="onChange"></elui-china-area-dht>
    <!--带isall参数和leave参数示例-->
    <elui-china-area-dht isall :leave="2" @change="onChange"></elui-china-area-dht>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { EluiChinaAreaDht } from './EluiChinaAreaDht'
export default defineComponent({
  name: 'app',
  components: {
    EluiChinaAreaDht,
  },
  setup() {
    function onChange(e: any) {
      console.log(e)
    }
    return {
      onChange,
    }
  },
})
</script>
