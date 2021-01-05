# elui-china-area-dht

##使用
更多使用请参考：https://www.yuque.com/cv8igf/gaxplg/btzy5i  
原理博客地址：https://juejin.cn/post/6914110923179474952/  
elui-china-area-dht会导出ChinaArea()对象，用以进行数据格式转换。里面有所有的省市区地址数据 
如：const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
```$xslt
<template>
  <div class="app">
    <!--默认使用-->
    <elui-china-area-dht @change="onChange"></elui-china-area-dht>
    <!--带isall参数和leave参数示例-->
    <elui-china-area-dht isall :leave="2" @change="onChange"></elui-china-area-dht>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { EluiChinaAreaDht } from 'elui-china-area-dht'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
export default defineComponent({
    components: {
        EluiChinaAreaDht,
    },
    setup() {
        function onChange(e) {
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
```
省市区数据来源：https://github.com/airyland/china-area-data  