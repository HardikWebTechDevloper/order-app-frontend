import { Component } from '@angular/core'

@Component({
  selector: 'vb-widgets-general-26',
  templateUrl: './26.component.html',
  styleUrls: ['./26.component.scss'],
})
export class VbGeneral26Component {
  data = [
    {
      id: 1,
      title: 'Gigabyte GeForce RTX 3060 Ti Eagle 8G',
      sku: 'GV-N306TEAGLE-8GD',
      img: '001.jpg',
      price: 599,
      oldPrice: 736,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 2,
      title: 'Gigabyte GeForce GTX 1660 Super Gaming OC 6GB GDDR6',
      sku: 'GV-N166SGAMING OC-6GD',
      img: '002.jpg',
      price: 399.99,
      oldPrice: 470,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 3,
      title: 'Palit GeForce RTX 2070 Super GR 8GB GDDR6',
      sku: 'NE6207S020P2-1040G',
      img: '003.jpg',
      price: 649,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 4,
      title: 'Palit GeForce RTX 3080 GamingPro 10GB GDDR6X',
      sku: 'NED3080019IA-132AA',
      img: '004.jpg',
      price: 789.99,
      oldPrice: 1099,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ]

  constructor() {}
}
