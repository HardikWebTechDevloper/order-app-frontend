import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'
const themes: any = require('./configs.json')

@Component({
  selector: 'vb-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.scss'],
})
export class VariantsComponent {
  version
  theme
  preselectedVariant
  isPreselectedOpen
  themeKeys = Object.keys(themes)

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isPreselectedOpen = state.isPreselectedOpen
      this.version = state.version
      this.theme = state.theme
      if (this.preselectedVariant !== state.preselectedVariant) {
        this.applyVariant(state.preselectedVariant)
      }
      this.preselectedVariant = state.preselectedVariant
      if (state.isPreselectedOpen) {
        document.getElementsByTagName('html')[0].classList.add('isPreselectedOpen')
      } else {
        setTimeout(() => {
          document.getElementsByTagName('html')[0].classList.remove('isPreselectedOpen')
        }, 500)
      }
    })
  }

  toggleModal() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isPreselectedOpen: !this.isPreselectedOpen,
      }),
    )
  }

  settingChange(value, setting) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        [setting]: value,
      }),
    )
  }

  applyVariant(key) {
    const payload = JSON.parse(JSON.stringify(themes[key]))
    if (this.theme === 'dark') {
      payload.menuColor = 'dark'
    }
    this.store.dispatch(new SettingsActions.ChangeSettingBulkAction(payload))
  }
}
