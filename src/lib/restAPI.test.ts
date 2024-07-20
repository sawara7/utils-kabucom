import { exit } from 'process'
import { KabuSApi } from '..'
import { getExpireDate } from 'utils-trade'
import { sleep } from 'utils-general'

(async () => {
    console.log(getExpireDate())
    const api = new KabuSApi({
        apiPassword: 'honban123',
        tradePassword: 'password'
    })
    await api.initialize()
    const res = await api.getWalletCash({
        APIPassword: 'honban123'
    })
    console.log(res.StockAccountWallet)
    const res2 = await api.getBoard("1578@1")
    console.log(res2.SymbolName, res2.BidPrice, res2.AskPrice)
    // console.log(res2)
    // const res3 = await api.sendOrder({
    //     Password: "xxx",
    //     Symbol: "1578", //銘柄コード
    //     Exchange: 1,
    //     SecurityType: 1,
    //     Side: "2",
    //     CashMargin: 1,
    //     DelivType: 2,
    //     FundType: "AA",
    //     AccountType: 4,
    //     Qty: 1,
    //     Price: 3180,
    //     ExpireDay: getExpireDate(),
    //     FrontOrderType: 20
    // })

    const res4 = await api.getOrders({
        
    })
    // console.log(res4)

    const res5 = await api.getPositions({})
    let balance1 = 0
    let balance2 = 0
    console.log(res5.length)
    for (const pos of res5) {
        await sleep(100)
        console.log(res5)
        const res6 = await api.getBoard(pos.Symbol + "@1")
        console.log(res6.AskPrice)
        console.log(pos.LeavesQty)
        balance1 += (pos.LeavesQty) * pos.Price
    }
    for (const o of res4) {
        if (o.State === 5) continue
        if (o.Side !== "2") continue
        await sleep(100)
        balance2 += o.OrderQty * o.Price
    }
    console.log(balance1, balance2, res.StockAccountWallet, res.StockAccountWallet + balance1 + balance2)
})()