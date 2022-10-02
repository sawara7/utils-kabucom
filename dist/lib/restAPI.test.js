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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const api = new __1.KabuSApi({
        apiPassword: 'honban123'
    });
    yield api.initialize();
    // const res = await api.getWalletCash({
    //     APIPassword: 'honban123'
    // })
    // console.log(res.StockAccountWallet)
    const res2 = yield api.getBoard("7203@1");
    console.log(res2.SymbolName, res2.BidPrice, res2.AskPrice);
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
    const res3 = yield api.getPositions({
        addinfo: "true"
    });
    console.log(res3);
}))();
