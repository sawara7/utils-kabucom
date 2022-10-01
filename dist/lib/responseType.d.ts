export interface GetTokenResponse {
    ResultCode: number;
    Token: string;
}
export interface SendOrderResponse {
    Result: number;
    OrderId: string;
}
export interface GetWalletCashResponse {
    StockAccountWallet: number;
}
export interface GetWalletMarginResponse {
    MarginAccountWallet: number;
    DepositkeepRate: number;
    ConsignmentDepositRate: number | null;
    CashOfConsignmentDepositRate: number | null;
}
export interface BoardInfo {
    Time?: string;
    Sign?: string;
    Price: number;
    Qty: number;
}
export interface GetBoardResponse {
    Symbol: string;
    SymbolName: string;
    Exchange: number;
    ExchangeName: string;
    CurrentPrice: number;
    CurrentPriceTime: string;
    CurrentPriceChangeStatus: string;
    CurrentPriceStatus: number;
    CalcPrice: number;
    PreviousClose: number;
    PreviousCloseTime: string;
    ChangePreviousClose: number;
    ChangePreviousClosePer: number;
    OpeningPrice: number;
    OpeningPriceTime: string;
    HighPrice: number;
    HighPriceTime: string;
    LowPrice: number;
    LowPriceTime: string;
    TradingVolume: number;
    TradingVolumeTime: string;
    VWAP: number;
    TradingValue: number;
    BidQty: number;
    BidPrice: number;
    BidTime: string;
    BidSign: string;
    MarketOrderSellQty: number;
    Sell1: BoardInfo;
    Sell2: BoardInfo;
    Sell3: BoardInfo;
    Sell4: BoardInfo;
    Sell5: BoardInfo;
    Sell6: BoardInfo;
    Sell7: BoardInfo;
    Sell8: BoardInfo;
    Sell9: BoardInfo;
    Sell10: BoardInfo;
    AskQty: number;
    AskPrice: number;
    AskTime: string;
    AskSign: string;
    MarketOrderBuyQty: number;
    Buy1: BoardInfo;
    Buy2: BoardInfo;
    Buy3: BoardInfo;
    Buy4: BoardInfo;
    Buy5: BoardInfo;
    Buy6: BoardInfo;
    Buy7: BoardInfo;
    Buy8: BoardInfo;
    Buy9: BoardInfo;
    Buy10: BoardInfo;
    OverSellQty: number;
    UnderBuyQty: number;
    TotalMarketValue: number;
    ClearingPrice: number;
    IV: number;
    Gamma: number;
    Theta: number;
    Vega: number;
    Delta: number;
    SecurityType: number;
}
export interface OrderDetail {
    SeqNum: number;
    ID: string;
    RecType: number;
    ExchangeID: string;
    State: number;
    TransactTime: string;
    OrdType: number;
    Price: number;
    Qty: number;
    ExecutionID: string;
    ExecutionDay: string;
    DelivDay: number;
    Commission: number;
    CommissionTax: number;
}
export interface GetOrderResponse {
    ID: string;
    State: number;
    OrderState: number;
    OrdType: number;
    RecvTime: string;
    Symbol: string;
    SymbolName: string;
    Exchange: number;
    ExchangeName: string;
    TimeInForce: number;
    Price: number;
    OrderQty: number;
    CumQty: number;
    Side: string;
    CashMargin: number;
    AccountType: number;
    DelivType: number;
    ExpireDay: number;
    MarginTradeType: number;
    MarginPremium: number;
    Details: OrderDetail[];
}
export interface CancelOrderResponse {
    Result: number;
    OrderId: string;
}
