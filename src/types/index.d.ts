export {}

// package.json 내 eslint 설정에서 rules에 type 검사 빼놓음 -> 추후 수정 필요
declare global {
    export interface Temp {
        type1: string,
        type2: number,
        type3: boolean,
        type4: Array,
        type5: Object
    }
}