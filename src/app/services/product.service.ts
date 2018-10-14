import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  mockUrl = 'https://private-b19a02-tagmove.apiary-mock.com/v1';

  getProducts(): any {
    return this._http.get(`${this.mockUrl}/m/products`)
  }

  acceptOffers(offerIds: any[]): any {
    return this._http.post(`${this.mockUrl}/m/offers`, {
      offerIds
    })
  }

}