import { Component } from '@angular/core'

@Component({
  selector: 'vb-menu-simply-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class MenuSimplyCartComponent {
  badgeCount: number = 2

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }
}
