import { Api, ApiConfig, ApiOptions } from './baseAPI';
import { SendOrderResponse, GetWalletCashResponse, GetWalletMarginResponse, GetBoardResponse, GetOrderResponse, GetPositionResponse } from './responseType';
import { SendOrderRequest, GetOrdersRequest, GetPositionsRequest } from './requestType';
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
    getWalletCash(): Promise<GetWalletCashResponse>;
    getWalletMargin(): Promise<GetWalletMarginResponse>;
    getBoard(symbol: string): Promise<GetBoardResponse>;
    getPositions(params: GetPositionsRequest): Promise<GetPositionResponse[]>;
    getOrders(params: GetOrdersRequest): Promise<GetOrderResponse[]>;
    cancelOrder(params: CancelOrderRequest): Promise<CancelOrderResponse>;
    get<T>(path: string, query?: {}): Promise<any>;
    post<T>(path: string, query: {}): Promise<any>;
    put<T>(path: string, query: {}): Promise<any>;
    private makeHeader;
}
