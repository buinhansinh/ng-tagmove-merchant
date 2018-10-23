import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Product } from "../model/model";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SharedService {
  private readonly selectedProduct = new Subject<Product>();
  constructor() {}

  public getSelectedProduct(): Observable<Product> {
    return this.selectedProduct.asObservable();
  }

  public updateSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }
}
