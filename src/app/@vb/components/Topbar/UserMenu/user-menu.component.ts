import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as UserActions from 'src/app/store/user/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-topbar-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {
  name: string = ''
  role: string = ''
  email: string = ''
  phone: string = ''

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.name = state.name
      this.role = state.role
      this.email = state.email
    })
  }

  logout() {
    this.store.dispatch(new UserActions.Logout())
  }
}
