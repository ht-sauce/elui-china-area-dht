import chinaAreaData from 'china-area-data'
import chinaAreaDataArr from 'china-area-data/data-array'

// 递归子选项
interface Options {
  label: string
  value: string
  leave?: number
  children?: Options[]
}
// 省市区数据结构化定义类型
interface ChinaArr {
  name: string
  parent?: string
  value: string
}
// 递归输入参数
interface InRecursion {
  ssq: { [key: string]: string }
  leave?: number
  custom?: Options
}
interface ChinaAreaInput {
  leave: number
  isall: boolean
  customItem?: Options[]
  after?: boolean
}
class ChinaArea {
  chinaAreaDataArr = chinaAreaDataArr
  chinaAreaData = chinaAreaData
  // 将数组结构转化为对象结构
  chinaObj() {
    const obj: { [key: string]: ChinaArr } = {}
    chinaAreaDataArr.map((li: ChinaArr) => {
      obj[li.value] = li
    })
    return obj
  }
  leave = 3 // 控制递归层级
  isall = false // 是否需要全部选项
  constructor({ leave = 0, isall = false }: ChinaAreaInput = {} as ChinaAreaInput) {
    this.leave = leave
    this.isall = isall
  }
  // 省市区数据格式化
  chinaData() {
    const province = chinaAreaData[86]
    const opt: InRecursion = { ssq: province }
    if (this.isall) {
      opt.custom = {
        label: '全部',
        value: 'all',
      }
    }
    return this.recursion(opt)
  }
  // 递归得到省市区三级数据
  private recursion({
    ssq,
    leave = 0, // 这个不是外部操作的，不允许修改
    custom,
  }: InRecursion) {
    const layer = leave + 1
    if (layer > this.leave) return
    const reprovince = []
    custom && reprovince.push(custom)
    for (const i in ssq) {
      const item: Options = {
        label: ssq[i],
        value: i,
        leave: layer,
      }
      if (chinaAreaData[i]) {
        item.children = this.recursion({ ssq: chinaAreaData[i], leave: layer, custom })
      }
      reprovince.push(item)
    }
    return reprovince
  }
}

export default ChinaArea
