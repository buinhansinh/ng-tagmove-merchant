import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { ProductsComponent } from './products/products.component';
import { OrderItemComponent } from './order-item/order-item.component';

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

  { path: 'products', component: Layout1Component, children: [
    { path: '', component: ProductsComponent },
  ]}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}