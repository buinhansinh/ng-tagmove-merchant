import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

  baseUrl =  'https://api.github.com';

  constructor(private _http: HttpClient) { }

  getProducts(): any {
    return this._http.get(`${this.baseUrl}/users/kevgilmore/repos`)
  }

}
