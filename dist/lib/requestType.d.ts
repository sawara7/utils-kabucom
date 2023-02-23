import { exchangeCodeType, OrderSide, productType, SecurityType, stringBoolean } from "./type";
export interface GetTokenRequest {
    APIPassword?: string;
}
export interface Position {
    HoldID: string;
    Qty: number;
}
export interface SendOrderRequest {
    Password?: string;
    Symbol: string;
    Exchange: exchangeCodeType;
    SecurityType: SecurityType;
    Side: OrderSide;
    CashMargin: number;
    MarginTradeType?: number;
    DelivType: number;
    FundType: string;
    AccountType: number;
    Qty: number;
    ClosePositionOrder?: number;
    ClosePositions?: Position[];
    Price: number;
    ExpireDay: number;
    FrontOrderType: number;
}
export interface GetWalletCashRequest {
    APIPassword?: string;
}
export interface GetWalletMarginRequest {
    APIPassword?: string;
}
export interface GetOrdersRequest {
    product?: productType;
    id?: string;
    updtime?: string;
    details?: string;
    symbol?: string;
    state?: string;
    side?: OrderSide;
    cashmargin?: string;
}
export interface CancelOrderRequest {
    OrderId: string;
    Password?: string;
}
export interface GetPositionsRequest {
    product?: productType;
    symbol?: string;
    side?: OrderSide;
    addinfo?: stringBoolean;
}
