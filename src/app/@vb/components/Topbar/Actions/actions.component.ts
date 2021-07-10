import { Component } from '@angular/core'

@Component({
  selector: 'vb-topbar-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class TopbarActionsComponent {
  badgeCount: number = 7

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }
}
