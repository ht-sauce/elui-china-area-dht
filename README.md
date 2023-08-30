# elui-china-area-dht
该项目将不会持续维护了，这个对于我早年来说是一个比较投机的npm包，不过内部关于省市区数据的逻辑处理大家有使用的情况下可以自行copy源代码。

核心原理上，本项目只是引用了省市区数据，然后并没有对element-ui或element-plus有任何二次封装，所有的一切都是基于官方配置上进行操作，并且我透传了所有外部传参，堪称无副作用。

本质上是对于ChinaArea.ts的使用，自行使用的情况下直接拷贝该文件即可直接使用。非常简单的，谢谢大家的厚爱。

https://github.com/ht-sauce/elui-china-area-dht/blob/master/src/EluiChinaAreaDht/src/ChinaArea.ts
## 使用
更多使用请参考：https://www.yuque.com/cv8igf/gaxplg/btzy5i  
原理博客地址：https://juejin.cn/post/6914110923179474952/  
elui-china-area-dht会导出ChinaArea()对象，用以进行数据格式转换。里面有所有的省市区地址数据 
如：const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat

突然有小伙伴问我怎么回显，这里更新下，正常使用v-model就行了
```vue
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
```
省市区数据来源：https://github.com/airyland/china-area-data  
