import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  mockUrl = 'https://private-b19a02-tagmove.apiary-mock.com/api/v1';

  getProducts(): any {
    return this._http.get(`${this.mockUrl}/m/merchid/products`)
  }

  acceptOffers(offerIds: any[]): any {
    return this._http.post(`${this.mockUrl}/m/merchid/offers`, {
      offerIds
    })
  }

}