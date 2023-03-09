import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private _HttpClient: HttpClient) { }

  Ser_getAllProducts() {
    return this._HttpClient.get(environment.BaseURL + "products");
  }

  Ser_getProductDetails(id: any) {
    return this._HttpClient.get(environment.BaseURL + "products/" + id);
  }

  Ser_getProductByCategory(value: any) {
    return this._HttpClient.get(environment.BaseURL + "products/category/" + value);
  }

  Ser_addProduct(model: any) {
    return this._HttpClient.post(environment.BaseURL + "products", model);
  }

  Ser_updateProduct(id: number, model: any) {
    return this._HttpClient.put(environment.BaseURL + "products/" + id, model);
  }

  Ser_deleteProduct(model: any) {
    return this._HttpClient.put(environment.BaseURL + "products", model);
  }

  Ser_getAllCategories() {
    return this._HttpClient.get(environment.BaseURL + "products/categories");
  }


  //Carts Functions
  Ser_addNewCart(model: any) {
    return this._HttpClient.post(environment.BaseURL + "carts", model);
  }

  Ser_getAllCarts(date?: any) {
    let params = new HttpParams();
    params = params.append("startDate", date?.start).append("endDate", date?.end)
    return this._HttpClient.get(environment.BaseURL + "carts", { params });
  }

  Ser_getCartByID(id: number) {
    return this._HttpClient.get(environment.BaseURL + "carts/" + id);
  }

  Ser_deleteCart(index: number) {
    return this._HttpClient.delete(environment.BaseURL + "carts/" + index);
  }

}
