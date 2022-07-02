import { Api, ApiConfig, ApiOptions } from './baseAPI';
import { SendOrderResponse, GetWalletCashResponse, GetWalletMarginResponse, GetBoardResponse } from './responseType';
import { SendOrderRequest, GetWalletCashRequest, GetWalletMarginRequest } from './requestType';
export interface KabuSApiConfig extends ApiConfig {
    apiPassword: string;
}
export declare class KabuSApi extends Api {
    private readonly apiPassword;
    private apiToken;
    constructor(config: KabuSApiConfig, options?: ApiOptions);
    initialize(): Promise<void>;
    private getToken;
    sendOrder(query: SendOrderRequest): Promise<SendOrderResponse>;
    getWalletCash(params: GetWalletCashRequest): Promise<GetWalletCashResponse>;
    getWalletMargin(params: GetWalletMarginRequest): Promise<GetWalletMarginResponse>;
    getBoard(symbol: string): Promise<GetBoardResponse>;
    get<T>(path: string, query?: {}): Promise<any>;
    post<T>(path: string, query: {}): Promise<any>;
    private makeHeader;
}
