import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ProductService } from '../services/product.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  products: any[] = [];

  constructor(
    private appService: AppService,
    private productService: ProductService,
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {
    this.appService.pageTitle = 'Tagmove';

    this.productService.getProducts().subscribe (
      products => this.products = products
    );
  }

  changeProduct(product) {
    console.log(product.productID)
    this.websocketService.emit({type: 1, productId: product.productID});
  }

}
