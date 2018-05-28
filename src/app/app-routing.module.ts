import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PayoutReceiptComponent } from './payout-receipt/payout-receipt.component';
import { FaqComponent } from './faq/faq.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: Layout1Component, pathMatch: 'full', children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'orders', component: Layout1Component, children: [
    { path: '', component: OrdersComponent },
  ]},

  { path: 'order/:id', component: Layout1Component, children: [
    { path: '', component: OrderItemComponent },
  ]},

  { path: 'payouts', component: Layout1Component, children: [
    { path: '', component: PayoutsComponent },
  ]},

  { path: 'payout-receipt', component: Layout1Component, children: [
    { path: '', component: PayoutReceiptComponent },
  ]},

  { path: 'products', component: Layout1Component, children: [
    { path: '', component: ProductsComponent },
  ]},

  { path: 'product/:id', component: Layout1Component, children: [
    { path: '', component: ProductItemComponent },
  ]},

  { path: 'about', component: Layout1Component, children: [
    { path: '', component:  AboutComponent },
  ]},

  { path: 'faq', component: Layout1Component, children: [
    { path: '', component: FaqComponent },
  ]},

  { path: 'contact', component: Layout1Component, children: [
    { path: '', component: ContactComponent },
  ]},

  { path: 'help', component: Layout1Component, children: [
    { path: '', component: HelpComponent },
  ]},

  { path: 'terms', component: Layout1Component, children: [
    { path: '', component: TermsComponent },
  ]},

  { path: 'account-settings', component: Layout1Component, children: [
    { path: '', component: AccountSettingsComponent },
  ]},

  { path: 'add-product', component: Layout1Component, children: [
    { path: '', component: AddProductComponent },
  ]}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}