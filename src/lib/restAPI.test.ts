import { KabuSApi } from '..'

(async () => {
    const api = new KabuSApi({
        apiPassword: 'honban123',
        tradePassword: 'password'
    })
    await api.initialize()
    // const res = await api.getWalletCash({
    //     APIPassword: 'honban123'
    // })
    // console.log(res.StockAccountWallet)
    const res2 = await api.getBoard("7203@1")
    console.log(res2.SymbolName, res2.BidPrice, res2.AskPrice)
    // console.log(res2)
    // const res3 = await api.sendOrder({
    //     Password: "xxxx",
    //     Symbol: "xxxx", //銘柄コード
    //     Exchange: 1,
    //     SecurityType: 1,
    //     Side: "2",
    //     CashMargin: 1,
    //     DelivType: 2,
    //     FundType: "AA",
    //     AccountType: 4,
    //     Qty: 100,
    //     Price: 400,
    //     ExpireDay: 20220630,
    //     FrontOrderType: 20
    // })
    const res3 = await api.getPositions({
        addinfo: "true"
    })
    console.log(res3)

    const res4 = await api.getOrders({
        
    })
    console.log(res4)
})()