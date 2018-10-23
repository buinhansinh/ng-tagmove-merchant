import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductStatistics, Product, Offer } from "../model/model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) {}

  mockUrl = "https://private-b19a02-tagmove.apiary-mock.com/v1/";

  getProducts(): Observable<Product[]> {
    return this._http.post<Product[]>(`${this.mockUrl}/m/products`, null);
  }

  acceptOffers(offerIds: any[]): any {
    return this._http.post(`${this.mockUrl}/m/offers`, {
      offerIds
    });
  }

  getOffers(productID: string): Observable<Offer[]> {
    return this._http.get(`${this.mockUrl}/m/offers/${productID}`).pipe(
      map((res: any[]) => {
        return res.map(offer => ({
          ...offer,
          price: Number.parseFloat(offer.price)
        }));
      })
    );
  }

  getProductStatistics(): Observable<ProductStatistics> {
    return this._http.post<ProductStatistics>(`${this.mockUrl}/m/stats`, null);
  }
}
