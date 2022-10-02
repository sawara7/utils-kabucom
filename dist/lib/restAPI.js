"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const querystring = __importStar(require("querystring"));
const baseAPI_1 = require("./baseAPI");
const URL_API_KABUS = 'http://localhost:18080/kabusapi';
class KabuSApi extends baseAPI_1.Api {
    constructor(config, options) {
        config.endPoint = config.endPoint || URL_API_KABUS;
        super(config, options);
        this.apiPassword = config.apiPassword;
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
        return this.post(path, query);
    }
    sendOrder(query) {
        const path = "/sendorder";
        return this.post(path, query);
    }
    getWalletCash(params) {
        const path = "/wallet/cash";
        return this.get(path, params);
    }
    getWalletMargin(params) {
        const path = "/wallet/margin";
        return this.get(path, params);
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
    cancelOrder(params) {
        const path = "/cancelorder";
        return this.put(path, params);
    }
    get(path, query) {
        let params = '';
        if (query && Object.keys(query).length) {
            params += '?' + querystring.stringify(query);
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
