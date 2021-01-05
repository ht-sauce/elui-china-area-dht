interface Options {
    label: string;
    value: string;
    leave?: number;
    children?: Options[];
}
interface ChinaArr {
    label: string;
    parent?: string;
    value: string;
}
interface ChinaAreaInput {
    leave: number;
    isall: boolean;
    customItem?: Options[];
    after?: boolean;
}
interface ChinaAreaflat {
    [key: string]: ChinaArr;
}
declare class ChinaArea {
    chinaAreaData: any;
    chinaAreaflat: ChinaAreaflat;
    chinaObj(): ChinaAreaflat;
    leave: number;
    isall: boolean;
    constructor({ leave, isall }?: ChinaAreaInput);
    chinaData(): Options[] | undefined;
    private recursion;
}
export default ChinaArea;
