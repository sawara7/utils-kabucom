import { KabuSApi } from '..'

(async () => {
    const api = new KabuSApi({
        apiPassword: 'xxxx'
    })
    await api.initialize()
    const res = await api.getWalletCash({
        APIPassword: 'xxxx'
    })
    console.log(res.StockAccountWallet)
})()