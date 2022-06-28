export interface GetTokenRequest {
  APIPassword: string;
}

export interface Position {
  HoldID: string;
  Qty: number;
}

export interface SendOrderRequest {
  Password: string; //注文パスワード
  Symbol: string; //銘柄コード
  Exchange: number; //市場コード
  // 定義値	説明
  // 1	東証
  // 3	名証
  // 5	福証
  // 6	札証
  SecurityType: number; //1	株式
  Side: string; //売買区分
  // 定義値	説明
  // 1	売
  // 2	買
  CashMargin: number; //現物信用区分
  // 1	現物
  // 2	信用新規
  // 3	信用返済
  MarginTradeType: number; //信用取引区分
  // ※現物取引の場合は省略可。
  // ※信用取引の場合、必須。
  // 1	制度信用
  // 2	一般信用
  // 3	一般信用（売短）
  DelivType: number; //受渡区分
  // ※株式取引の場合、必須。
  // ※現物売、信用返済の場合は「0(指定なし)」を指定する。
  // 0	指定なし
  // 1	自動振替
  // 2	お預り金
  FundType: string; //資産区分
  // ※株式取引の場合、必須。
  // ※現物売、信用返済の場合は「' '(指定なし)」を指定する。
  // 定義値	説明
  // (半角スペース2つ)	指定なし
  // 02	保護
  // AA	信用代用
  // BB	証拠金代用
  // 11	信用取引
  AccountType: number; //口座種別
  // 定義値	説明
  // 2	一般
  // 4	特定
  // 12	法人
  Qty:number; //注文数量
  ClosePositionOrder: number; //決済順序
  // ※信用取引の場合、必須。
  // ※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。
  // ※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
  // 0	日付（古い順）、損益（高い順）
  // 1	日付（古い順）、損益（低い順）
  // 2	日付（新しい順）、損益（高い順）
  // 3	日付（新しい順）、損益（低い順）
  // 4	損益（高い順）、日付（古い順）
  // 5	損益（高い順）、日付（新しい順）
  // 6	損益（低い順）、日付（古い順）
  // 7	損益（低い順）、日付（新しい順）
  ClosePositions: Position[]; //返済建玉指定
  // ※信用取引の場合、必須。
  // ※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。
  // ※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
  Price: number; //注文価格
  // ※FrontOrderTypeで成行を指定した場合、0を指定する。 
  ExpireDay: number; //注文有効期限
  //yyyyMMdd形式
  FrontOrderType: number //執行条件
}

export interface GetWalletCashRequest {
  APIPassword: string;
}

export interface GetWalletMarginRequest{
  APIPassword: string;
}