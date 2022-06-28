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
  MarginAccountWallet: number,
  DepositkeepRate: number,
  ConsignmentDepositRate: number | null,
  CashOfConsignmentDepositRate: number | null
}