import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/Services/apiservices.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.scss']
})
export class AdminCartComponent implements OnInit {

  cartProduct: any[] = [];
  ordered: boolean = false;
  len: number = 0;
  totalPrice: number = 0;
  loading: boolean = false;

  constructor(private _HttpClient: HttpClient, private api: ApiservicesService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.loading = true;
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
      this.loading = false;
      this.len = this.cartProduct.length;
      this.getTotalPrice();
    }
  }

  increase(index: number) {
    this.cartProduct[index].quantity++
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }

  decrease(index: number) {
    if (this.cartProduct[index].quantity > 0) {
      this.cartProduct[index].quantity--
      this.getTotalPrice()
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    }
  }

  changeQunatity(index: number) {
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice()
  }

  //Delete Specific Product
  delete(index: number) {
    this.cartProduct.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice()
    this.len--;
    if (this.cartProduct.length == 0) {
      this.len = 0;
    }
  }

  deleteAllProducts() {
    this.cartProduct.splice(0, this.cartProduct.length);
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.len = 0;
  }
  //Function to get Total Price
  getTotalPrice() {
    this.totalPrice = 0
    for (let i in this.cartProduct) {
      this.totalPrice += this.cartProduct[i].product.price * this.cartProduct[i].quantity;
      Math.ceil(this.totalPrice);
    }
  }

  addProductsToCart() {
    //This is array to store product id and product qauntity only
    let products = this.cartProduct.map(item => {
      return { productId: item.product.id, quantity: item.quantity }
    })
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    }
    this.addNewCart(model);

  }

  addNewCart(model: any) {
    this.loading = true;
    this.api.Ser_addNewCart(model).subscribe((response) => {
      this.loading = false;
      this.ordered = true;
      this.deleteAllProducts();
    }, error => {
      this.ordered = false;
    });
  }

}
