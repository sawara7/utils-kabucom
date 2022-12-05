import { exchangeCodeType, OrderSide } from "..";

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

export interface BoardInfo {
  Time?: string
  Sign?: string
  Price: number
  Qty: number
}
export interface GetBoardResponse {
  Symbol: string //銘柄コード
  SymbolName: string //銘柄名
  Exchange: exchangeCodeType
  ExchangeName: string //市場名称 ※株式・先物・オプション銘柄の場合のみ
  CurrentPrice: number //number <double> 現値
  CurrentPriceTime:	string //<date-time> 現値時刻
  CurrentPriceChangeStatus: string //
  // 現値前値比較
  // 定義値	説明
  // 0000	事象なし
  // 0056	変わらず
  // 0057	UP
  // 0058	DOWN
  // 0059	中断板寄り後の初値
  // 0060	ザラバ引け
  // 0061	板寄り引け
  // 0062	中断引け
  // 0063	ダウン引け
  // 0064	逆転終値
  // 0066	特別気配引け
  // 0067	一時留保引け
  // 0068	売買停止引け
  // 0069	サーキットブレーカ引け
  // 0431	ダイナミックサーキットブレーカ引け
  CurrentPriceStatus: number //integer <int32>
  // 現値ステータス
  // 定義値	説明
  // 1	現値
  // 2	不連続歩み
  // 3	板寄せ
  // 4	システム障害
  // 5	中断
  // 6	売買停止
  // 7	売買停止・システム停止解除
  // 8	終値
  // 9	システム停止
  // 10	概算値
  // 11	参考値
  // 12	サーキットブレイク実施中
  // 13	システム障害解除
  // 14	サーキットブレイク解除
  // 15	中断解除
  // 16	一時留保中
  // 17	一時留保解除
  // 18	ファイル障害
  // 19	ファイル障害解除
  // 20	Spread/Strategy
  // 21	ダイナミックサーキットブレイク発動
  // 22	ダイナミックサーキットブレイク解除
  // 23	板寄せ約定
  CalcPrice: number //<double> 計算用現値
  PreviousClose: number //<double> 前日終値
  PreviousCloseTime: string //<date-time>前日終値日付
  ChangePreviousClose: number //<double> 前日比
  ChangePreviousClosePer: number //<double>騰落率
  OpeningPrice: number //<double>始値
  OpeningPriceTime: string //<date-time>始値時刻
  HighPrice: number //<double>高値
  HighPriceTime: string //<date-time>高値時刻
  LowPrice: number //<double>安値
  LowPriceTime: string //<date-time>安値時刻
  TradingVolume: number //<double>売買高 ※株式・先物・オプション銘柄の場合のみ
  TradingVolumeTime: string //<date-time>売買高時刻 ※株式・先物・オプション銘柄の場合のみ
  VWAP: number //<double>売買高加重平均価格（VWAP） ※株式・先物・オプション銘柄の場合のみ
  TradingValue: number //<double>売買代金 ※株式・先物・オプション銘柄の場合のみ
  BidQty: number //<double> 最良売気配数量 ※①※株式・先物・オプション銘柄の場合のみ
  BidPrice: number //<double>最良売気配値段 ※①※株式・先物・オプション銘柄の場合のみ
  BidTime: string //<date-time>最良売気配時刻 ※①※株式銘柄の場合のみ
  BidSign: string //最良売気配フラグ ※① ※株式・先物・オプション銘柄の場合のみ
  // 定義値	説明
  // 0000	事象なし
  // 0101	一般気配
  // 0102	特別気配
  // 0103	注意気配
  // 0107	寄前気配
  // 0108	停止前特別気配
  // 0109	引け後気配
  // 0116	寄前気配約定成立ポイントなし
  // 0117	寄前気配約定成立ポイントあり
  // 0118	連続約定気配
  // 0119	停止前の連続約定気配
  // 0120	買い上がり売り下がり中
  MarketOrderSellQty: number //<double>売成行数量※株式銘柄の場合のみ
  Sell1: BoardInfo
  Sell2: BoardInfo
  Sell3: BoardInfo
  Sell4: BoardInfo
  Sell5: BoardInfo
  Sell6: BoardInfo
  Sell7: BoardInfo
  Sell8: BoardInfo
  Sell9: BoardInfo
  Sell10: BoardInfo
  AskQty:	number //<double>最良買気配数量 ※① ※株式・先物・オプション銘柄の場合のみ
  AskPrice: number //<double> 最良買気配値段 ※① ※株式・先物・オプション銘柄の場合のみ
  AskTime: string //<date-time>最良買気配時刻 ※① ※株式銘柄の場合のみ
  AskSign: string //最良買気配フラグ ※①※株式・先物・オプション銘柄の場合のみ
  // 定義値	説明
  // 0000	事象なし
  // 0101	一般気配
  // 0102	特別気配
  // 0103	注意気配
  // 0107	寄前気配
  // 0108	停止前特別気配
  // 0109	引け後気配
  // 0116	寄前気配約定成立ポイントなし
  // 0117	寄前気配約定成立ポイントあり
  // 0118	連続約定気配
  // 0119	停止前の連続約定気配
  // 0120	買い上がり売り下がり中
  MarketOrderBuyQty: number //<double> 買成行数量 ※株式銘柄の場合のみ
  Buy1: BoardInfo
  Buy2: BoardInfo
  Buy3: BoardInfo
  Buy4: BoardInfo
  Buy5: BoardInfo
  Buy6: BoardInfo
  Buy7: BoardInfo
  Buy8: BoardInfo
  Buy9: BoardInfo
  Buy10: BoardInfo
  OverSellQty: number //<double> OVER気配数量 ※株式銘柄の場合のみ
  UnderBuyQty: number //<double> UNDER気配数量 ※株式銘柄の場合のみ
  TotalMarketValue: number //<double> 時価総額 ※株式銘柄の場合のみ
  ClearingPrice: number //<double> 清算値 ※先物銘柄の場合のみ
  IV: number //<double> インプライド・ボラティリティ ※オプション銘柄かつ日通しの場合のみ
  Gamma: number //<double> ガンマ ※オプション銘柄かつ日通しの場合のみ
  Theta: number //<double> セータ ※オプション銘柄かつ日通しの場合のみ
  Vega: number //<double>ベガ ※オプション銘柄かつ日通しの場合のみ
  Delta: number //<double> デルタ ※オプション銘柄かつ日通しの場合のみ
  SecurityType: number //<int32>
  // 銘柄種別
  // 定義値	説明
  // 0	指数
  // 1	現物
  // 101	日経225先物
  // 103	日経225OP
  // 107	TOPIX先物
  // 121	JPX400先物
  // 144	NYダウ
  // 145	日経平均VI
  // 154	東証マザーズ指数先物
  // 155	TOPIX_REIT
  // 171	TOPIX CORE30
  // 901	日経平均225ミニ先物
  // 907	TOPIXミニ先物
}

export interface OrderDetail {
  SeqNum: number
  ID: string
  RecType: number
  // 1	受付
  // 2	繰越
  // 3	期限切れ
  // 4	発注
  // 5	訂正
  // 6	取消
  // 7	失効
  // 8	約定
  ExchangeID: string
  State: number
  // 1	待機（発注待機）
  // 2	処理中（発注送信中・訂正送信中・取消送信中）
  // 3	処理済（発注済・訂正済・取消済・全約定・期限切れ）
  // 4	エラー
  // 5	削除済み
  TransactTime: string
  OrdType: number
  // 1	ザラバ
  // 2	寄り
  // 3	引け
  // 4	不成
  // 5	対当指値
  // 6	IOC
  Price: number
  Qty: number
  ExecutionID: string
  ExecutionDay: string
  DelivDay: number
  Commission: number //手数料 ※注文詳細の明細種別が約定（RecType=8)の場合に設定。
  CommissionTax: number //<double> 手数料消費税※明細種別は約定（RecType=8）の場合にのみ表示されます。
}

export interface GetOrderResponse {
  ID: string
  State: number
  // 1	待機（発注待機）
  // 2	処理中（発注送信中）
  // 3	処理済（発注済・訂正済）
  // 4	訂正取消送信中
  // 5	終了（発注エラー・取消済・全約定・失効・期限切れ）
  OrderState: number
  // 1	待機（発注待機）
  // 2	処理中（発注送信中）
  // 3	処理済（発注済・訂正済）
  // 4	訂正取消送信中
  // 5	終了（発注エラー・取消済・全約定・失効・期限切れ）
  OrdType: number
  // 1	ザラバ
  // 2	寄り
  // 3	引け
  // 4	不成
  // 5	対当指値
  // 6	IOC
  RecvTime: string
  Symbol: string
  SymbolName: string
  Exchange: exchangeCodeType
  ExchangeName: string
  TimeInForce: number
  // 1	FAS
  // 2	FAK
  // 3	FOK
  Price: number  
  OrderQty: number
  // 発注数量
  // ※注文期限切れと失効の場合、OrderQtyはゼロになりません。
  // ※期限切れと失効の確認方法としては、DetailsのRecType（3: 期限切れ、7: 失効）にてご確認ください。
  CumQty: number
  Side: OrderSide
  CashMargin: number
  // 2	新規
  // 3	返済
  AccountType: number
  // 2	一般
  // 4	特定
  // 12	法人
  DelivType: number
  // 1	自動振替
  // 2	お預り金
  ExpireDay: number  //yyyyMMdd形式
  MarginTradeType: number
  // 1	制度信用
  // 2	一般信用（長期）
  // 3	一般信用（デイトレ）
  MarginPremium: number
  Details: OrderDetail[]
}

export interface CancelOrderResponse {
  Result: number //integer <int32> 結果コード 0が成功。それ以外はエラーコード。
  OrderId: string //受付注文番号
}

export interface GetPositionResponse {
  ExecutionID: string // 約定番号 ※現物取引では、nullが返ります。
  AccountType: number // 口座種別 2	一般 4	特定 12	法人
  Symbol: string //銘柄コード
  SymbolName: string //銘柄名
  Exchange: exchangeCodeType
  ExchangeName: string //市場名
  SecurityType: number //銘柄種別 ※先物・オプション銘柄の場合のみ
  ExecutionDay: number
  // 約定日（建玉日）
  // ※信用・先物・オプションの場合のみ
  // ※現物取引では、nullが返ります。
  Price: number //値段
  LeavesQty: number //残数量（保有数量）
  HoldQty: number //拘束数量（返済のために拘束されている数量）
  Side: OrderSide
  Expenses: number //諸経費 ※信用・先物・オプションの場合のみ
  Commission: number //手数料 ※信用・先物・オプションの場合のみ
  CommissionTax: number //手数料消費税 ※信用・先物・オプションの場合のみ
  ExpireDay: number //返済期日 ※信用・先物・オプションの場合のみ
  MarginTradeType: number //信用取引区分 ※信用の場合のみ
  // 定義値	説明
  // 1	制度信用
  // 2	一般信用（長期）
  // 3	一般信用（デイトレ）
  CurrentPrice: number //現在値 追加情報出力フラグ：falseの場合、null
  Valuation: number //評価金額 追加情報出力フラグ：falseの場合、null
  ProfitLoss: number //評価損益額 追加情報出力フラグ：falseの場合、null
  ProfitLossRate: number //評価損益率 追加情報出力フラグ：falseの場合、null
}