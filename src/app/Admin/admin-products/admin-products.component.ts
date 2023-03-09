import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/Services/apiservices.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  allProducts: any[] = [];
  loading: boolean = false;
  allCategories: any;
  form!: FormGroup
  imageSrc: any = ""
  model: any;
  constructor(private api: ApiservicesService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();

    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })

  }

  getAllProducts() {
    this.loading = true;
    this.api.Ser_getAllProducts().subscribe((response: any) => {
      this.loading = false;
      this.allProducts = response;
    })
  }

  getAllCategory() {
    this.api.Ser_getAllCategories().subscribe((response) => {
      this.allCategories = response
    })
  }

  getCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }

  delete(index: number) {

  }

  getImageBase64(event: any) {
    // this.base64 = ''
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   this.base64 = reader.result; // This will print the Base64-encoded string
    //   // console.log(this.base64);
    //   this.form.get('image')?.setValue(this.base64);
    // };

    // this.imageSrc = event.target.value;
    this.form.get('image')?.setValue(event.target.value);
  }

  addProduct() {
    const model = this.form.value;
    this.api.Ser_addProduct(model).subscribe((response) => {
      alert("Add Product Success");
      this.getAllProducts();
    })
  }

  update(item: any) {
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image
    })
  }

  updateBtn(id: number) {
    this.api.Ser_updateProduct(id, this.form.value).subscribe((response) => {
      alert("Product Updated Successs");
    })
  }
}
