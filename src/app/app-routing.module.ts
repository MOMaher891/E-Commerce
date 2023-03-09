import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Client/all-products/all-products.component';
import { CartComponent } from './Client/cart/cart.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetailsComponent } from './Client/product-details/product-details.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminCartComponent } from './Admin/admin-cart/admin-cart.component';
import { AdminAllCartsComponent } from './Admin/admin-all-carts/admin-all-carts.component';
const routes: Routes = [
  { path: "", redirectTo: "All-products", pathMatch: "full" },
  { path: 'All-products', component: AllProductsComponent },
  { path: 'product_details/:id', component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "dashboard", component: AdminProductsComponent },
  { path: "dashboard/cart/user/:id", component: AdminCartComponent },
  { path: "dashboard/allCarts", component: AdminAllCartsComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
