import { Component, OnInit } from '@angular/core';
import { Products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  Products: any

  constructor() {

  }

  ngOnInit() {
    this.Products = Products
  }

}
