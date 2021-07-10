import { Component, OnInit } from '@angular/core'
import { MenuService } from 'src/app/services/menu'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-menu-simply-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.scss'],
})
export class MenuSimplyPagesComponent implements OnInit {
  menuData: any = []
  menuColor: string

  constructor(private menuService: MenuService, private store: Store<any>) {}

  ngOnInit() {
    this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.menuColor = state.menuColor
    })
  }
}
