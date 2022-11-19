import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
 
  public products: Iproduct[] = [
    {
      name :'Product 1',
      price : 100,
      packagingQuantity : 1,
      availableQuantity : 100,
      unit :'lt.',
      activeFlag: true,
      manufacturer: 'Manufacturer 1',
      avatar : './assets/img/avatars/1.jpg',
      productId : 'P1',
    },
    {
      name :'Product 1',
      price : 100,
      packagingQuantity : 1,
      availableQuantity : 100,
      unit :'lt.',
      activeFlag: true,
      manufacturer: 'Manufacturer 1',
      avatar : './assets/img/avatars/1.jpg',
      productId : 'P1',
    },
    {
      name :'Product 1',
      price : 100,
      packagingQuantity : 1,
      availableQuantity : 100,
      unit :'lt.',
      activeFlag: true,
      manufacturer: 'Manufacturer 1',
      avatar : './assets/img/avatars/1.jpg',
      productId : 'P1',
    },
    {
      name :'Product 1',
      price : 100,
      packagingQuantity : 1,
      availableQuantity : 100,
      unit :'lt.',
      activeFlag: true,
      manufacturer: 'Manufacturer 1',
      avatar : './assets/img/avatars/1.jpg',
      productId : 'P1',
    }
  ]

  ngOnInit(): void {
  }

}
