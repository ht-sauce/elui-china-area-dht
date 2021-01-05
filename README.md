# dht-china-proper

省市区数据来源：https://github.com/airyland/china-area-data  

##使用
更多使用请参考：https://www.yuque.com/cv8igf/gaxplg/btzy5i  
原理博客地址：
```$xslt
<template>
  <div class="app">
    <EluiChinaAreaDht @change="onChange" />
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { EluiChinaAreaDht } from 'EluiChinaAreaDht'

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

```
