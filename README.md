# dht-china-proper

省市区数据来源：https://github.com/airyland/china-area-data  

##使用
`<template>
  <div class="app">
    <EluiChinaAreaDht @change="onChange" />
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
`
