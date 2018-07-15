import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';


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
// Services
import { ProductService } from './services/product.service';
import { WebsocketService } from './services/websocket.service';
import { ConfigService } from './services/config.service';


// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ProductsComponent } from './products/products.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { HomeChartComponent } from './charts/home-chart/home-chart.component';
import { HelpComponent } from './help/help.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PayoutReceiptComponent } from './payout-receipt/payout-receipt.component';
import { FaqComponent } from './faq/faq.component';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    OrdersComponent,
    PayoutsComponent,
    ProductsComponent,
    OrderItemComponent,
    HomeChartComponent,
    HelpComponent,
    ProductItemComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    AccountSettingsComponent,
    AddProductComponent,
    PayoutReceiptComponent,
    FaqComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),

    // App
    AppRoutingModule,
    LayoutModule,
    ChartsModule,
    NouisliderModule
  ],

  providers: [
    Title,
    AppService,
    ProductService,
    WebsocketService,
    ConfigService,
    {provide: APP_INITIALIZER, useFactory: configFactory, deps: [ConfigService], multi: true }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

export function configFactory(configService: ConfigService) {
  return () => configService.loadEnv();
}