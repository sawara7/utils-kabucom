import { Api, ApiConfig, ApiOptions } from './baseAPI';
import { SendOrderResponse, GetWalletCashResponse, GetWalletMarginResponse, GetBoardResponse, GetOrderResponse } from './responseType';
import { SendOrderRequest, GetWalletCashRequest, GetWalletMarginRequest, GetOrdersRequest } from './requestType';
import { CancelOrderRequest, CancelOrderResponse } from '..';
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
    getOrders(params: GetOrdersRequest): Promise<GetOrderResponse[]>;
    cancelOrder(params: CancelOrderRequest): Promise<CancelOrderResponse>;
    get<T>(path: string, query?: {}): Promise<any>;
    post<T>(path: string, query: {}): Promise<any>;
    put<T>(path: string, query: {}): Promise<any>;
    private makeHeader;
}
