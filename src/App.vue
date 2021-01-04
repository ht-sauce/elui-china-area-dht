<template>
  <div class="app">
    <elui-china-area-dht @change="onChange"> </elui-china-area-dht>
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
