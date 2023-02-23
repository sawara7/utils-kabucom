import { Api, ApiConfig, ApiOptions } from './baseAPI';
import { SendOrderResponse, GetWalletCashResponse, GetWalletMarginResponse, GetBoardResponse, GetOrderResponse, GetPositionResponse } from './responseType';
import { SendOrderRequest, GetWalletCashRequest, GetWalletMarginRequest, GetOrdersRequest, GetPositionsRequest } from './requestType';
import { CancelOrderRequest, CancelOrderResponse } from '..';
export interface KabuSApiConfig extends ApiConfig {
    apiPassword: string;
    tradePassword: string;
}
export declare class KabuSApi extends Api {
    private readonly apiPassword;
    private readonly tradePassword;
    private apiToken;
    constructor(config: KabuSApiConfig, options?: ApiOptions);
    initialize(): Promise<void>;
    private getToken;
    getWalletCash(query?: GetWalletCashRequest): Promise<GetWalletCashResponse>;
    getWalletMargin(query?: GetWalletMarginRequest): Promise<GetWalletMarginResponse>;
    getBoard(symbol: string): Promise<GetBoardResponse>;
    getPositions(params: GetPositionsRequest): Promise<GetPositionResponse[]>;
    getOrders(params: GetOrdersRequest): Promise<GetOrderResponse[]>;
    sendOrder(query: SendOrderRequest): Promise<SendOrderResponse>;
    cancelOrder(params: CancelOrderRequest): Promise<CancelOrderResponse>;
    get<T>(path: string, query?: {}): Promise<any>;
    post<T>(path: string, query: {}): Promise<any>;
    put<T>(path: string, query: {}): Promise<any>;
    private makeHeader;
}
