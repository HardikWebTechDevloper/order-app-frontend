import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-footer-2',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class Footer2Component {
  settings: any
  date = new Date().getFullYear()

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.settings = state
    })
  }
}
