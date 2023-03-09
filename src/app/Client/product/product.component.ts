import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data: any;
  @Output() product = new EventEmitter();
  addBtn: boolean = false;
  disabled: boolean = false;
  amount: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.product.emit({ product: this.data, quantity: this.amount })
    this.disabled = true;
  }
}
