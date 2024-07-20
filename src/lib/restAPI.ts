import { Api, ApiConfig, ApiOptions } from './baseAPI'
import {
  GetTokenResponse,
  SendOrderResponse,
  GetWalletCashResponse,
  GetWalletMarginResponse,
  GetBoardResponse,
  GetOrderResponse,
  GetPositionResponse,
} from './responseType'
import {
  GetTokenRequest,
  SendOrderRequest,
  GetWalletCashRequest,
  GetWalletMarginRequest,
  GetOrdersRequest,
  GetPositionsRequest,
} from './requestType'
import { CancelOrderRequest, CancelOrderResponse } from '..'

const URL_API_KABUS = 'http://localhost:18080/kabusapi'

export interface KabuSApiConfig extends ApiConfig {
  apiPassword: string
  tradePassword: string
}

export class KabuSApi extends Api {
  private readonly apiPassword: string
  private readonly tradePassword: string
  private apiToken: string;

  constructor(config: KabuSApiConfig, options?: ApiOptions) {
    config.endPoint = config.endPoint || URL_API_KABUS
    super(config, options)
    this.apiPassword = config.apiPassword
    this.tradePassword = config.tradePassword
    this.apiToken = ""
  }

  public async initialize(){
    const token = await this.getToken({
      APIPassword: this.apiPassword
    })
    if (token.ResultCode === 0){
      this.apiToken = token.Token
    }else{
      console.log('initialize error');
    }
  }

  private getToken(query: GetTokenRequest): Promise<GetTokenResponse> {
    const path = "/token"
    if (!query.APIPassword) {query.APIPassword = this.apiPassword}
    return this.post(path, query)
  }

  public getWalletCash(query?: GetWalletCashRequest): Promise<GetWalletCashResponse> {
    const path = "/wallet/cash";
    if (!query || !query.APIPassword) query = {APIPassword: this.apiPassword}
    return this.get(path, query)
  }

  public getWalletMargin(query?: GetWalletMarginRequest): Promise<GetWalletMarginResponse> {
    const path = "/wallet/margin";
    if (!query || !query.APIPassword) query = {APIPassword: this.apiPassword}
    return this.get(path, query)
  }

  public getBoard(symbol: string): Promise<GetBoardResponse> {
    const path = "/board/" + symbol
    return this.get(path, {})
  }

  public getPositions(params: GetPositionsRequest): Promise<GetPositionResponse[]> {
    const path = "/positions"
    return this.get(path, params)
  }

  public getOrders(params: GetOrdersRequest): Promise<GetOrderResponse[]> {
    const path = "/orders";
    return this.get(path, params);
  }

  public sendOrder(query: SendOrderRequest): Promise<SendOrderResponse> {
    const path = "/sendorder"
    if (!query.Password) query.Password = this.tradePassword
    return this.post(path, query)
  }

  public cancelOrder(params: CancelOrderRequest): Promise<CancelOrderResponse> {
    const path = "/cancelorder";
    if (!params.Password) params.Password = this.tradePassword
    return this.put(path, params);
  }

  get<T>(path: string, query?: {}) {
    let params = '';
    if (query && Object.keys(query).length) {
      params += '?' + (new URLSearchParams(query)).toString();
    }
    const headers = this.makeHeader();
    return super.get(path, query, headers);
  }

  post<T>(path: string, query: {}) {
    const headers = this.makeHeader();
    return super.post(path, query, headers);
  }

  put<T>(path: string, query: {}) {
    const headers = this.makeHeader();
    return super.put(path, query, headers);
  }

  private makeHeader(): any {
    let header = {'Content-Type': 'application/json'};
    if (this.apiToken !== ''){
      Object.assign(header, {'X-API-KEY': this.apiToken});
    }
    return header;
  }
}
