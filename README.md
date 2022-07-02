# kabucom-utils
kabu STATION APIのラッパーライブラリ

## ライブラリのインストール
```
npm install github:sawara7/kabucom-utils 
```

## 実装例（REST API）

### 初期設定
```
import { KabuSAPI } from 'kabucom-utils'

(async ()=>{
    const api = new KabuSAPI({
        apiPassword: 'kabu STATIONで設定したパスワード'
    })
    await api.initialize() // トークン取得
})()
```

### 株価取得
```
const res = await api.getBoard("7203@1")
```

### 発注
```
const res = await api.sendOrder({
    Password: "xxxx",
    Symbol: "xxxx", //銘柄コード
    Exchange: 1,
    SecurityType: 1,
    Side: "2",
    CashMargin: 1,
    DelivType: 2,
    FundType: "AA",
    AccountType: 4,
    Qty: 100,
    Price: 400,
    ExpireDay: 20220630,
    FrontOrderType: 20
})
```

### 取引余力
```
const res = await api.getWalletCash({
    APIPassword: 'kabu STATIONで設定したパスワード'
})
```
