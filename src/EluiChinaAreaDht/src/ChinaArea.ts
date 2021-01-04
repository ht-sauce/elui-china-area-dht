import chinaAreaData from 'china-area-data'

// 递归子选项
interface Options {
  label: string
  value: string
  leave?: number
  children?: Options[]
}
// 省市区数据结构化定义类型
interface ChinaArr {
  label: string
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
interface ChinaAreaflat {
  [key: string]: ChinaArr
}
class ChinaArea {
  chinaAreaData = chinaAreaData
  chinaAreaflat: ChinaAreaflat // 对象改平之后的结构，用于数据取值
  // 将数组结构转化为对象结构
  chinaObj() {
    const list: ChinaAreaflat = {}
    for (const key in chinaAreaData) {
      for (const i in chinaAreaData[key]) {
        const item: ChinaArr = {
          label: chinaAreaData[key][i],
          value: i,
        }
        if (key !== '86') item.parent = key
        list[i] = item
      }
    }
    return list
  }
  leave = 3 // 控制递归层级
  isall = false // 是否需要全部选项
  constructor({ leave = 0, isall = false }: ChinaAreaInput = {} as ChinaAreaInput) {
    this.leave = leave
    this.isall = isall
    this.chinaAreaflat = this.chinaObj()
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
