import { NgModule } from '@angular/core'
import { SharedModule } from '../shared.module'
import { ComponentsModule } from '../@vb/components/components.module'

import { LayoutAuthComponent } from './Auth/auth.component'
import { LayoutMainComponent } from './Main/main.component'
import { LayoutPublicComponent } from './Public/public.component'

const COMPONENTS = [LayoutAuthComponent, LayoutMainComponent, LayoutPublicComponent]

@NgModule({
  imports: [SharedModule, ComponentsModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutsModule {}
