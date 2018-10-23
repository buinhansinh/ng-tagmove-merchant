import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "../app.service";
import { ProductService } from "../services/product.service";
import { WebsocketService } from "../services/websocket.service";
import { Product, ProductStatistics } from "../model/model";
import { Subject } from "rxjs/Subject";
import { mergeMap, map, takeUntil, scan } from "rxjs/operators";
import { SharedService } from "../services/shared.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<any>();
  readonly columns = ["productName"].map(name => ({ prop: name }));
  products: Product[] = [];
  selectedProduct: Product[] = [];
  statistics: ProductStatistics;
  productName: string;
  isLoadingProducts = true;
  isLoadingStatistics = true;
  constructor(
    private appService: AppService,
    private productService: ProductService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.appService.pageTitle = "Tagmove";
    this.productService
      .getProductStatistics()
      .pipe(takeUntil(this.destroy$))
      .subscribe((statistics: ProductStatistics) => {
        this.statistics = statistics;
        this.isLoadingStatistics = false;
      });

    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => this.updateProducts(products));
    this.sharedService
      .getSelectedProduct()
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: Product) => {
        this.productName = product.productName;
        this.selectedProduct = product ? [product] : [];
      });
  }

  private updateProducts(products: Product[]) {
    this.products = products;
    this.sharedService.updateSelectedProduct(
      products.length > 0 ? products[0] : null
    );
    this.isLoadingProducts = false;
  }

  ngOnDestroy() {
    this.destroy$.next("");
    this.destroy$.unsubscribe();
  }

  onSelectProduct({ selected }) {
    const selectedProducts: Product[] = selected;
    this.sharedService.updateSelectedProduct(
      selected.length > 0 ? selected[0] : null
    );
  }
}
