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
    const res = yield api.getWalletCash({
        APIPassword: 'honban123'
    });
    console.log(res.StockAccountWallet);
    const res2 = yield api.getBoard("7203@1");
    console.log(res2);
    const res3 = yield api.sendOrder({
        Password: "svexkk0727",
        Symbol: "3936",
        Exchange: 1,
        SecurityType: 1,
        Side: "2",
        CashMargin: 1,
        DelivType: 2,
        FundType: "AA",
        // 02	保護
        // AA	信用代用
        // BB	証拠金代用
        // 11	信用取引
        AccountType: 4,
        Qty: 100,
        Price: 400,
        // ※FrontOrderTypeで成行を指定した場合、0を指定する。 
        ExpireDay: 20220630,
        //yyyyMMdd形式
        FrontOrderType: 20 //執行条件
    });
}))();
