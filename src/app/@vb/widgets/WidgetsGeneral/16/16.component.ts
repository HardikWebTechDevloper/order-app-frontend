import { Component, Input, OnChanges } from '@angular/core'

@Component({
  selector: 'vb-widgets-general-16',
  templateUrl: './16.component.html',
  styleUrls: ['./16.component.scss'],
})
export class VbGeneral16Component implements OnChanges {
  @Input() isNew: boolean = Math.random() < 0.5
  @Input() isFavourite: boolean = Math.random() < 0.5
  @Input() image: string = `assets/images/products/00${Math.floor(Math.random() * 4) + 1}.jpg`
  @Input() name: string =
    'TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home'
  @Input() price: string = '99.99'
  @Input() oldPrice: string = '199.99'
  setFavorite() {
    this.isFavourite = !this.isFavourite
  }
  ngOnChanges() {}
}
