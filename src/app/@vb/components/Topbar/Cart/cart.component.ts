import { Component } from '@angular/core'

@Component({
  selector: 'vb-topbar-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class TopbarCartComponent {
  badgeCount: number = 2

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }
}
