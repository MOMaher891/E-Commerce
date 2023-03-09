import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiservicesService } from 'src/app/Services/apiservices.service';
@Component({
  selector: 'app-admin-all-carts',
  templateUrl: './admin-all-carts.component.html',
  styleUrls: ['./admin-all-carts.component.scss']
})
export class AdminAllCartsComponent implements OnInit {

  allCarts: any;
  ordered: boolean = false;
  len: number = 0;
  totalPrice: number = 0;
  loading: boolean = false;
  form!: FormGroup
  details: any;
  products: any[] = [];

  constructor(private api: ApiservicesService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: ['']
    })
    this.getAllCarts();


  }

  getAllCarts() {
    this.loading = true;
    this.api.Ser_getAllCarts().subscribe((response) => {
      this.loading = false;
      this.allCarts = response;

    })
  }

  getCartByID(index: number) {
    this.products.splice(0, this.products.length)
    this.getTotalPrice();
    this.loading = true;
    this.details = this.allCarts[index];
    for (let x in this.details.products) {
      this.api.Ser_getProductDetails(this.details.products[x].productId).subscribe((response) => {
        this.loading = false;
        this.products.push({ product: response, quantity: this.details.products[x].quantity });
      })
    }
  }

  applyFilter() {
    // console.log(this.form.value);
    let date = this.form.value;
    this.api.Ser_getAllCarts(date).subscribe((response) => {
      this.loading = false;
      this.allCarts = response;
      console.log(this.allCarts);

    }, error => {
      console.log('Error');
    })
  }

  deleteCart(index: number) {
    this.api.Ser_deleteCart(index).subscribe((response) => {
      this.getAllCarts();
      console.log(response);
    })
  }

  getTotalPrice() {
    this.totalPrice = 0
    for (let i in this.details) {
      console.log(this.details[i]);
    }

  }


}
