import chinaAreaData from 'china-area-data';
class ChinaArea {
    constructor({ leave = 0, isall = false } = {}) {
        this.chinaAreaData = chinaAreaData;
        this.leave = 3; // 控制递归层级
        this.isall = false; // 是否需要全部选项
        this.leave = leave;
        this.isall = isall;
        this.chinaAreaflat = this.chinaObj();
    }
    // 将数组结构转化为对象结构
    chinaObj() {
        const list = {};
        for (const key in chinaAreaData) {
            for (const i in chinaAreaData[key]) {
                const item = {
                    label: chinaAreaData[key][i],
                    value: i,
                };
                if (key !== '86')
                    item.parent = key;
                list[i] = item;
            }
        }
        return list;
    }
    // 省市区数据格式化
    chinaData() {
        const province = chinaAreaData[86];
        const opt = { ssq: province };
        if (this.isall) {
            opt.custom = {
                label: '全部',
                value: 'all',
            };
        }
        return this.recursion(opt);
    }
    // 递归得到省市区三级数据
    recursion({ ssq, leave = 0, // 这个不是外部操作的，不允许修改
    custom, }) {
        const layer = leave + 1;
        if (layer > this.leave)
            return;
        const reprovince = [];
        custom && reprovince.push(custom);
        for (const i in ssq) {
            const item = {
                label: ssq[i],
                value: i,
                leave: layer,
            };
            if (chinaAreaData[i]) {
                item.children = this.recursion({ ssq: chinaAreaData[i], leave: layer, custom });
            }
            reprovince.push(item);
        }
        return reprovince;
    }
}
export default ChinaArea;
