"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const utils_trade_1 = require("utils-trade");
const utils_general_1 = require("utils-general");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log((0, utils_trade_1.getExpireDate)());
    const api = new __1.KabuSApi({
        apiPassword: 'honban123',
        tradePassword: 'password'
    });
    yield api.initialize();
    const res = yield api.getWalletCash({
        APIPassword: 'honban123'
    });
    console.log(res.StockAccountWallet);
    const res2 = yield api.getBoard("1578@1");
    console.log(res2.SymbolName, res2.BidPrice, res2.AskPrice);
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
    const res4 = yield api.getOrders({});
    // console.log(res4)
    const res5 = yield api.getPositions({});
    let balance1 = 0;
    let balance2 = 0;
    console.log(res5.length);
    for (const pos of res5) {
        yield (0, utils_general_1.sleep)(100);
        console.log(res5);
        const res6 = yield api.getBoard(pos.Symbol + "@1");
        console.log(res6.AskPrice);
        console.log(pos.LeavesQty);
        balance1 += (pos.LeavesQty) * pos.Price;
    }
    for (const o of res4) {
        if (o.State === 5)
            continue;
        if (o.Side !== "2")
            continue;
        yield (0, utils_general_1.sleep)(100);
        balance2 += o.OrderQty * o.Price;
    }
    console.log(balance1, balance2, res.StockAccountWallet, res.StockAccountWallet + balance1 + balance2);
}))();
