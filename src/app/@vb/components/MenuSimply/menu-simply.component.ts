import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-menu-simply',
  templateUrl: './menu-simply.component.html',
  styleUrls: ['./menu-simply.component.scss'],
})
export class MenuSimplyComponent implements OnInit {
  logo: string
  version: string
  menuColor: string

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
      this.version = state.version
      this.menuColor = state.menuColor
    })
  }
}
