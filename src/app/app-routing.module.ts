import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/@vb/components/Guard/auth.guard'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'

// layouts & notfound
import { LayoutAuthComponent } from 'src/app/layouts/Auth/auth.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'

// pages
import { DashboardAlphaComponent } from './pages/dashboard/alpha/alpha.component'
import { ListDistributorsComponent } from './components/distributors/list-distributors/list-distributors.component';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { DeliveryPartnerSettingComponent } from './components/delivery-partner-setting/delivery-partner-setting.component';

// VB:REPLACE-END:ROUTER-IMPORTS

const routes: Routes = [
  {
    // VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT
    path: '',
    data: { title: 'Dashboards' },
    component: MainDashboardComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    canActivate: [AuthGuard],
    children: [
      // VB:REPLACE-START:ROUTER-CONFIG
      {
        path: 'dashboard',
        data: { title: 'Dashboards' },
        component: MainDashboardComponent,
      },
      {
        path: 'distributors',
        data: { title: 'Distributors' },
        component: ListDistributorsComponent,
      },
      {
        path: 'delivery-partner',
        data: { title: 'Delivery Partner' },
        component: DeliveryPartnerSettingComponent,
      },
      // VB:REPLACE-END:ROUTER-CONFIG
    ],
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth/404',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
      relativeLinkResolution: 'legacy',
    }),
    LayoutsModule,
    WidgetsComponentsModule,
  ],
  declarations: [
    // VB:REPLACE-START:ROUTER-DECLARATIONS
    DashboardAlphaComponent,

    // VB:REPLACE-END:ROUTER-DECLARATIONS
  ],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule { }
