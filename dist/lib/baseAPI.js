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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
class Api {
    constructor(config, options) {
        this.endPoint = config.endPoint || "";
        this.keepAlive = config.keepAlive || false;
        this.timeout = config.timeout || 3000;
        if (options) {
            this.optionsCallback = options.optionsCallback;
            this.responseCallback = options.responseCallback;
        }
    }
    get(path, params, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', path, params, {}, headers);
        });
    }
    post(path, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', path, {}, data, headers);
        });
    }
    request(method, path, params, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: method,
                baseURL: this.endPoint,
                url: path,
                timeout: this.timeout,
                // httpAgent: new http.Agent({ keepAlive: this.keepAlive }),
                // httpsAgent: new https.Agent({ keepAlive: this.keepAlive }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            if (params && Object.keys(params).length > 0) {
                Object.assign(options, { params });
            }
            if (data && Object.keys(data).length > 0) {
                Object.assign(options, { data });
            }
            if (headers && Object.keys(headers).length > 0) {
                Object.assign(options, { headers });
            }
            if (this.optionsCallback) {
                yield this.optionsCallback(options);
            }
            return axios_1.default.request(options).then((res) => {
                if (res.data) {
                    if (this.responseCallback) {
                        this.responseCallback(res.data);
                    }
                    return res.data;
                }
                else {
                    throw new Error(res.data);
                }
            });
        });
    }
}
exports.Api = Api;
