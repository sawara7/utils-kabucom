import * as querystring from 'querystring'
import { Api, ApiConfig, ApiOptions } from './baseAPI'
import {
  GetTokenResponse,
  SendOrderResponse,
  GetWalletCashResponse,
  GetWalletMarginResponse,
  GetBoardResponse,
  GetOrderResponse,
} from './responseType'
import {
  GetTokenRequest,
  SendOrderRequest,
  GetWalletCashRequest,
  GetWalletMarginRequest,
  GetOrdersRequest,
} from './requestType'

const URL_API_KABUS = 'http://localhost:18080/kabusapi'

export interface KabuSApiConfig extends ApiConfig {
  apiPassword: string
}

export class KabuSApi extends Api {
  private readonly apiPassword: string;
  private apiToken: string;

  constructor(config: KabuSApiConfig, options?: ApiOptions) {
    config.endPoint = config.endPoint || URL_API_KABUS
    super(config, options)
    this.apiPassword = config.apiPassword
    this.apiToken = ""
  }

  public async initialize(){
    const token = await this.getToken({
      APIPassword: this.apiPassword
    })
    if (token.ResultCode === 0){
      this.apiToken = token.Token
      console.log(this.apiToken)
    }else{
      console.log('initialize error');
    }
  }

  private getToken(query: GetTokenRequest): Promise<GetTokenResponse> {
    const path = "/token";
    return this.post(path, query);
  }

  public sendOrder(query: SendOrderRequest): Promise<SendOrderResponse> {
    const path = "/sendorder";
    return this.post(path, query);
  }

  public getWalletCash(params: GetWalletCashRequest): Promise<GetWalletCashResponse> {
    const path = "/wallet/cash";
    return this.get(path, params);
  }

  public getWalletMargin(params: GetWalletMarginRequest): Promise<GetWalletMarginResponse> {
    const path = "/wallet/margin";
    return this.get(path, params);
  }

  public getBoard(symbol: string): Promise<GetBoardResponse> {
    const path = "/board/" + symbol
    return this.get(path, {})
  }

  public getOrders(params: GetOrdersRequest): Promise<GetOrderResponse[]> {
    const path = "/orders";
    return this.get(path, params);
  }

  get<T>(path: string, query?: {}) {
    let params = '';
    if (query && Object.keys(query).length) {
      params += '?' + querystring.stringify(query);
    }
    const headers = this.makeHeader();
    return super.get(path, query, headers);
  }

  post<T>(path: string, query: {}) {
    const headers = this.makeHeader();
    return super.post(path, query, headers);
  }

  private makeHeader(): any {
    let header = {'Content-Type': 'application/json'};
    if (this.apiToken !== ''){
      Object.assign(header, {'X-API-KEY': this.apiToken});
    }
    return header;
  }
}
