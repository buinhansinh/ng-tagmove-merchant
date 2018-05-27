import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';


// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ProductsComponent } from './products/products.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ProductService } from './services/product.service';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    Page2Component,
    OrdersComponent,
    PayoutsComponent,
    ProductsComponent,
    OrderItemComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),

    // App
    AppRoutingModule,
    LayoutModule
  ],

  providers: [
    Title,
    AppService,
    ProductService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
