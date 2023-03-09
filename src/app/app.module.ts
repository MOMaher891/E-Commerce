import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './Client/all-products/all-products.component';
import { ProductDetailsComponent } from './Client/product-details/product-details.component';
import { Error404Component } from './error404/error404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './Client/cart/cart.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoadingComponent } from './loading/loading.component';
import { SelectComponent } from './select/select.component';
import { ProductComponent } from './Client/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCartComponent } from './Admin/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminAllCartsComponent } from './Admin/admin-all-carts/admin-all-carts.component';
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    Error404Component,
    NavBarComponent,
    CartComponent,
    LoadingComponent,
    SelectComponent,
    ProductComponent,
    AdminCartComponent,
    AdminProductsComponent,
    AdminAllCartsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
