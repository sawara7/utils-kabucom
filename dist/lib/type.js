"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSides = exports.exchangeCode = exports.productTypes = void 0;
//取り扱い商品
exports.productTypes = [
    "0", //すべて
    "1", //現物
    "2", //信用
    "3", //先物
    "4" //OP
];
// 市場コード
exports.exchangeCode = [
    1, //東証
    3, //名証
    5, //福証
    6, //札証
    9, //SOR
    2, //日通し
    23, //日中
    24 //夜間
];
// 売買区分
exports.orderSides = [
    "1", //売
    "2" //買
];
