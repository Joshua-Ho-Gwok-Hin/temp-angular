import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
