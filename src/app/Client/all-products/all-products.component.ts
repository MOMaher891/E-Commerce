import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiservicesService } from '../../Services/apiservices.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  allProducts: any;
  allCategories: any;
  error: boolean = false;
  loading: boolean = false;
  cartProduct: any[] = [];
  constructor(private _HttpClient: HttpClient, private api: ApiservicesService) { }

  ngOnInit(): void {

    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.loading = true;
    this.api.Ser_getAllProducts().subscribe((response) => {
      this.allProducts = response;
      this.error = false;
      this.loading = false;
      return response;
    }, error => {
      this.error = true;
      this.loading = false;
    })
  }

  getAllCategories() {
    this.api.Ser_getAllCategories().subscribe((response) => {
      this.allCategories = response;
    })
  }

  getProductByCategory(event: any) {
    this.loading = true;
    let value = event.target.value;//Get Value of option in select
    if (value == 'all') {
      this.getAllProducts();//Get All Products
    } else {
      this.api.Ser_getProductByCategory(value).subscribe((response) => {
        this.allProducts = response;
        this.loading = false;
      })
    }
  }

  add(event: any) {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProduct.find(item => item.product.id == event.product.id);
      if (exist) {
        alert("This Product Already Added");
      } else {
        this.cartProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      }

    } else {
      this.cartProduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    }
  }
}
