import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as UserActions from 'src/app/store/user/actions'
import * as Reducers from 'src/app/store/reducers'
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core';

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
  currentUser: any;

  constructor(
    private store: Store<any>,
    private authService: AuthService,
    public router: Router,
    public cf: ChangeDetectorRef
  ) {
    let currentUserValue: any = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = currentUserValue.user;

    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.name = state.name
      this.role = state.role
      this.email = state.email
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
