export type stringBoolean = "true" | "false";
export declare const productTypes: readonly ["0", "1", "2", "3", "4"];
export type productType = typeof productTypes[number];
export declare const exchangeCode: readonly [1, 3, 5, 6, 9, 2, 23, 24];
export type exchangeCodeType = typeof exchangeCode[number];
export declare const orderSides: readonly ["1", "2"];
export type OrderSide = typeof orderSides[number];
export type SecurityType = 1;
