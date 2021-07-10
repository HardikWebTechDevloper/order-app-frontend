import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AuthRouterModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from 'src/app/@vb/components/components.module'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'

// system pages
import { LoginPage } from './login/login.component'
import { RegisterPage } from './register/register.component'
import { LockscreenPage } from './lockscreen/lockscreen.component'
import { ForgotPasswordPage } from './forgot-password/forgot-password.component'
import { Error500Page } from './500/500.component'
import { Error404Page } from './404/404.component'

const COMPONENTS = [
  LoginPage,
  RegisterPage,
  LockscreenPage,
  ForgotPasswordPage,
  Error500Page,
  Error404Page,
]

@NgModule({
  imports: [
    SharedModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    WidgetsComponentsModule,
  ],
  declarations: [...COMPONENTS],
})
export class AuthModule {}
