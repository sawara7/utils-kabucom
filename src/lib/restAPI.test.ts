import { KabuSApi } from '..'

(async () => {
    const api = new KabuSApi({
        apiPassword: 'honban123'
    })
    await api.initialize()
    const res = await api.getWalletCash({
        APIPassword: 'honban123'
    })
    console.log(res.StockAccountWallet)
    const res2 = await api.getBoard("7203@1")
    console.log(res2)
})()