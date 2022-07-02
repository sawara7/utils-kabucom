import { Method } from 'axios';
export interface ApiOptions {
    optionsCallback?: Function;
    responseCallback?: Function;
}
export interface ApiConfig {
    endPoint?: string;
    keepAlive?: boolean;
    timeout?: number;
}
export declare class Api {
    readonly endPoint: string;
    readonly keepAlive: boolean;
    readonly timeout: number;
    readonly optionsCallback?: Function;
    readonly responseCallback?: Function;
    constructor(config: ApiConfig, options?: ApiOptions);
    get(path: string, params?: {}, headers?: {}): Promise<any>;
    post(path: string, data?: {}, headers?: {}): Promise<any>;
    request(method: Method, path: string, params?: {}, data?: {}, headers?: {}): Promise<any>;
}
