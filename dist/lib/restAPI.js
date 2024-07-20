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
exports.KabuSApi = void 0;
const baseAPI_1 = require("./baseAPI");
const URL_API_KABUS = 'http://localhost:18080/kabusapi';
class KabuSApi extends baseAPI_1.Api {
    constructor(config, options) {
        config.endPoint = config.endPoint || URL_API_KABUS;
        super(config, options);
        this.apiPassword = config.apiPassword;
        this.tradePassword = config.tradePassword;
        this.apiToken = "";
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getToken({
                APIPassword: this.apiPassword
            });
            if (token.ResultCode === 0) {
                this.apiToken = token.Token;
            }
            else {
                console.log('initialize error');
            }
        });
    }
    getToken(query) {
        const path = "/token";
        if (!query.APIPassword) {
            query.APIPassword = this.apiPassword;
        }
        return this.post(path, query);
    }
    getWalletCash(query) {
        const path = "/wallet/cash";
        if (!query || !query.APIPassword)
            query = { APIPassword: this.apiPassword };
        return this.get(path, query);
    }
    getWalletMargin(query) {
        const path = "/wallet/margin";
        if (!query || !query.APIPassword)
            query = { APIPassword: this.apiPassword };
        return this.get(path, query);
    }
    getBoard(symbol) {
        const path = "/board/" + symbol;
        return this.get(path, {});
    }
    getPositions(params) {
        const path = "/positions";
        return this.get(path, params);
    }
    getOrders(params) {
        const path = "/orders";
        return this.get(path, params);
    }
    sendOrder(query) {
        const path = "/sendorder";
        if (!query.Password)
            query.Password = this.tradePassword;
        return this.post(path, query);
    }
    cancelOrder(params) {
        const path = "/cancelorder";
        if (!params.Password)
            params.Password = this.tradePassword;
        return this.put(path, params);
    }
    get(path, query) {
        let params = '';
        if (query && Object.keys(query).length) {
            params += '?' + (new URLSearchParams(query)).toString();
        }
        const headers = this.makeHeader();
        return super.get(path, query, headers);
    }
    post(path, query) {
        const headers = this.makeHeader();
        return super.post(path, query, headers);
    }
    put(path, query) {
        const headers = this.makeHeader();
        return super.put(path, query, headers);
    }
    makeHeader() {
        let header = { 'Content-Type': 'application/json' };
        if (this.apiToken !== '') {
            Object.assign(header, { 'X-API-KEY': this.apiToken });
        }
        return header;
    }
}
exports.KabuSApi = KabuSApi;
