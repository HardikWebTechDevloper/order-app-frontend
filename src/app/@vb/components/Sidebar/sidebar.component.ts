import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import store from 'store'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  settings: any = {}
  theme: any

  defaultColor = '#4b7cf3'
  window: any = window as any

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.settings = state
      this.theme = state.theme === 'dark'
    })
  }

  toggleSettings() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isSidebarOpen: !this.settings.isSidebarOpen,
      }),
    )
  }

  togglePreselectedThemes() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isPreselectedOpen: !this.settings.isPreselectedOpen,
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

  settingChangeTheme(value, setting) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        [setting]: value ? 'dark' : 'default',
      }),
    )
  }

  setWidth(value: number) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        leftMenuWidth: value,
      }),
    )
  }

  setTheme(nextTheme) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        theme: nextTheme,
      }),
    )
  }

  setPrimaryColor(e) {
    const color = e.target ? e.target.value : e
    const addStyles = () => {
      const styleElement = document.querySelector('#primaryColor')
      if (styleElement) {
        styleElement.remove()
      }
      const body = document.querySelector('body')
      const styleEl = document.createElement('style')
      const css = document.createTextNode(`:root { --vb-color-primary: ${color};}`)
      styleEl.setAttribute('id', 'primaryColor')
      styleEl.appendChild(css)
      body.appendChild(styleEl)
    }
    addStyles()
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        primaryColor: color,
      }),
    )
  }

  resetColor() {
    this.setPrimaryColor(this.defaultColor)
  }
}
