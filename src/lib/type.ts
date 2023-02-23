export type stringBoolean = "true" | "false"

//取り扱い商品
export const productTypes = [
  "0", //すべて
  "1", //現物
  "2", //信用
  "3", //先物
  "4"  //OP
] as const
export type productType = typeof productTypes[number]

// 市場コード
export const exchangeCode = [
    1,  //東証
    3,  //名証
    5,  //福証
    6,  //札証
    9,  //SOR
    2,  //日通し
    23, //日中
    24  //夜間
] as const
export type exchangeCodeType = typeof exchangeCode[number]

// 売買区分
export const orderSides = [
  "1",  //売
  "2"   //買
] as const
export type OrderSide = typeof orderSides[number]

export type SecurityType = 1