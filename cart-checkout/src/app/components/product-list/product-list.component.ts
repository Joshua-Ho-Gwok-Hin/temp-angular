import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = [...products];

  constructor() { }

  ngOnInit(): void {
  }


  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the procduct goes on sale');
  }

}
