import { exchangeCodeType, OrderSide, productType, SecurityType, stringBoolean } from "./type";

export interface GetTokenRequest {
  APIPassword?: string;
}

export interface Position {
  HoldID: string;
  Qty: number;
}

export interface SendOrderRequest {
  Password?: string; //注文パスワード
  Symbol: string; //銘柄コード
  Exchange: exchangeCodeType; // 市場コード
  SecurityType: SecurityType; //1	株式
  Side: OrderSide;
  CashMargin: number;
  // 現物信用区分
  // 1	現物
  // 2	信用新規
  // 3	信用返済
  MarginTradeType?: number; //信用取引区分
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
  AccountType: number;
  // 口座種別
  // 2	一般
  // 4	特定
  // 12	法人
  Qty:number; //注文数量
  ClosePositionOrder?: number; //決済順序
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
  ClosePositions?: Position[]; //返済建玉指定
  // ※信用取引の場合、必須。
  // ※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。
  // ※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
  Price: number; //注文価格 ※FrontOrderTypeで成行を指定した場合、0を指定する。 
  ExpireDay: number; //注文有効期限 yyyyMMdd形式
  FrontOrderType: number //執行条件
}

export interface GetWalletCashRequest {
  APIPassword?: string;
}

export interface GetWalletMarginRequest{
  APIPassword?: string;
}

export interface GetOrdersRequest {
  product?: productType
  id?: string
  // 注文番号
  // ※指定された注文番号と一致する注文のみレスポンスします。
  // ※指定された注文番号との比較では大文字小文字を区別しません。
  // ※複数の注文番号を指定することはできません。
  updtime?: string
  // 更新日時
  // ※形式：yyyyMMddHHmmss （例：20201201123456）
  // ※指定された更新日時以降（指定日時含む）に更新された注文のみレスポンスします。
  // ※複数の更新日時を指定することはできません。
  details?: string
  // 注文詳細抑止
  // 定義値	説明
  // true	注文詳細を出力する（デフォルト）
  // false	注文詳細の出力しない
  symbol?: string
  // 銘柄コード
  // ※指定された銘柄コードと一致する注文のみレスポンスします。
  // ※複数の銘柄コードを指定することができません。
  state?: string
  // 1	待機（発注待機）
  // 2	処理中（発注送信中）
  // 3	処理済（発注済・訂正済）
  // 4	訂正取消送信中
  // 5	終了（発注エラー・取消済・全約定・失効・期限切れ）
  side?: OrderSide
  cashmargin?: string
  // 2	新規
  // 3	返済
}

export interface CancelOrderRequest {
  OrderId: string //注文番号 sendorderのレスポンスで受け取るOrderID。
  Password?: string //注文パスワード
}

export interface GetPositionsRequest {
  product?: productType
  symbol?: string
  // 銘柄コード
  // ※指定された銘柄コードと一致するポジションのみレスポンスします。
  // ※複数の銘柄コードを指定することはできません。
  side?: OrderSide
  addinfo?: stringBoolean
  // 追加情報出力フラグ（未指定時：true）
  // ※追加情報は、「現在値」、「評価金額」、「評価損益額」、「評価損益率」を意味します。
  // true	追加情報を出力する
  // false	追加情報を出力しない
}