import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() title: string = "";
  @Input() data: any;
  @Input() select = ""
  @Output() selectedValue = new EventEmitter()
  @Input() all: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
