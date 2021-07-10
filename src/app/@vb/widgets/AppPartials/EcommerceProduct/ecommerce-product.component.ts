import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-app-partials-ecommerce-product',
  templateUrl: './ecommerce-product.component.html',
  styleUrls: ['./ecommerce-product.component.scss'],
})
export class VbAppPartialsEcommerceProductComponent implements OnInit {
  isFavourite = true
  activeImgIndex = 0
  images = [
    'assets/images/products/001.jpg',
    'assets/images/products/002.jpg',
    'assets/images/products/003.jpg',
    'assets/images/products/004.jpg',
  ]

  constructor() {}
  ngOnInit() {}

  setFavourite() {
    this.isFavourite = !this.isFavourite
  }

  setImage(index) {
    this.activeImgIndex = index
  }
}
