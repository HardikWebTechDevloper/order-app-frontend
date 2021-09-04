import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// system pages
import { LoginPage } from 'src/app/pages/auth/login/login.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    data: { title: 'Login' },
  }
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AuthRouterModule {}
