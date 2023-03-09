import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiservicesService } from '../../Services/apiservices.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product_details: any;
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private HttpClient: HttpClient, private api: ApiservicesService) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getProductDetails(this.id);
  }

  ngOnInit(): void {
  }

  getProductDetails(id: any) {
    this.loading = true;
    this.api.Ser_getProductDetails(id).subscribe((response) => {
      this.product_details = response;
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

}
