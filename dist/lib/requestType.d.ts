export interface GetTokenRequest {
    APIPassword: string;
}
export interface Position {
    HoldID: string;
    Qty: number;
}
export interface SendOrderRequest {
    Password: string;
    Symbol: string;
    Exchange: number;
    SecurityType: number;
    Side: string;
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
    APIPassword: string;
}
export interface GetWalletMarginRequest {
    APIPassword: string;
}
