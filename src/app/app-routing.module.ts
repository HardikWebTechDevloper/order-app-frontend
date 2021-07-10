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
// VB:REPLACE-START:ROUTER-IMPORTS
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { DashboardAlphaComponent } from './pages/dashboard/alpha/alpha.component'
import { DashboardBetaComponent } from './pages/dashboard/beta/beta.component'
import { DashboardGammaComponent } from './pages/dashboard/gamma/gamma.component'
import { DashboardCryptoComponent } from './pages/dashboard/crypto/crypto.component'
import { AppsComponent } from './pages/apps/apps.component'
import { AppsProfileComponent } from './pages/apps/profile/profile.component'
import { AppsCalendarComponent } from './pages/apps/calendar/calendar.component'
import { AppsGalleryComponent } from './pages/apps/gallery/gallery.component'
import { AppsMessagingComponent } from './pages/apps/messaging/messaging.component'
import { AppsMailComponent } from './pages/apps/mail/mail.component'
import { ExtraAppsComponent } from './pages/extra-apps/extra-apps.component'
import { ExtraAppsGithubExploreComponent } from './pages/extra-apps/github-explore/github-explore.component'
import { ExtraAppsGithubDiscussComponent } from './pages/extra-apps/github-discuss/github-discuss.component'
import { ExtraAppsDigitaloceanDropletsComponent } from './pages/extra-apps/digitalocean-droplets/digitalocean-droplets.component'
import { ExtraAppsDigitaloceanCreateComponent } from './pages/extra-apps/digitalocean-create/digitalocean-create.component'
import { ExtraAppsGoogleAnalyticsComponent } from './pages/extra-apps/google-analytics/google-analytics.component'
import { ExtraAppsWordpressPostComponent } from './pages/extra-apps/wordpress-post/wordpress-post.component'
import { ExtraAppsWordpressPostsComponent } from './pages/extra-apps/wordpress-posts/wordpress-posts.component'
import { ExtraAppsWordpressAddComponent } from './pages/extra-apps/wordpress-add/wordpress-add.component'
import { ExtraAppsTodoistListComponent } from './pages/extra-apps/todoist-list/todoist-list.component'
import { ExtraAppsJiraDashboardComponent } from './pages/extra-apps/jira-dashboard/jira-dashboard.component'
import { ExtraAppsJiraAgileBoardComponent } from './pages/extra-apps/jira-agile-board/jira-agile-board.component'
import { ExtraAppsHelpdeskDashboardComponent } from './pages/extra-apps/helpdesk-dashboard/helpdesk-dashboard.component'
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component'
import { EcommerceDashboardComponent } from './pages/ecommerce/dashboard/dashboard.component'
import { EcommerceOrdersComponent } from './pages/ecommerce/orders/orders.component'
import { EcommerceProductCatalogComponent } from './pages/ecommerce/product-catalog/product-catalog.component'
import { EcommerceProductDetailsComponent } from './pages/ecommerce/product-details/product-details.component'
import { EcommerceCartComponent } from './pages/ecommerce/cart/cart.component'
import { UiKitsAntdComponent } from './pages/ui-kits/antd/antd.component'
import { UiKitsBootstrapComponent } from './pages/ui-kits/bootstrap/bootstrap.component'
import { WidgetsComponent } from './pages/widgets/widgets.component'
import { WidgetsGeneralComponent } from './pages/widgets/general/general.component'
import { WidgetsListsComponent } from './pages/widgets/lists/lists.component'
import { WidgetsTablesComponent } from './pages/widgets/tables/tables.component'
import { WidgetsChartsComponent } from './pages/widgets/charts/charts.component'
import { CardsComponent } from './pages/cards/cards.component'
import { CardsBasicComponent } from './pages/cards/basic/basic.component'
import { CardsTabbedComponent } from './pages/cards/tabbed/tabbed.component'
import { TablesComponent } from './pages/tables/tables.component'
import { TablesAntdComponent } from './pages/tables/antd/antd.component'
import { TablesBootstrapComponent } from './pages/tables/bootstrap/bootstrap.component'
import { ChartsComponent } from './pages/charts/charts.component'
import { ChartsChartistjsComponent } from './pages/charts/chartistjs/chartistjs.component'
import { ChartsChartjsComponent } from './pages/charts/chartjs/chartjs.component'
import { ChartsC3Component } from './pages/charts/C3/C3.component'
import { IconsComponent } from './pages/icons/icons.component'
import { IconsFeatherIconsComponent } from './pages/icons/feather-icons/feather-icons.component'
import { IconsFontawesomeComponent } from './pages/icons/fontawesome/fontawesome.component'
import { IconsLineariconsFreeComponent } from './pages/icons/linearicons-free/linearicons-free.component'
import { IconsIcomoonFreeComponent } from './pages/icons/icomoon-free/icomoon-free.component'
import { AdvancedFormExamplesComponent } from './pages/advanced/form-examples/form-examples.component'
import { AdvancedEmailTemplatesComponent } from './pages/advanced/email-templates/email-templates.component'
import { AdvancedPricingTablesComponent } from './pages/advanced/pricing-tables/pricing-tables.component'
import { AdvancedInvoiceComponent } from './pages/advanced/invoice/invoice.component'
import { AdvancedUtilitiesComponent } from './pages/advanced/utilities/utilities.component'
import { AdvancedGridComponent } from './pages/advanced/grid/grid.component'
import { AdvancedTypographyComponent } from './pages/advanced/typography/typography.component'
import { AdvancedColorsComponent } from './pages/advanced/colors/colors.component'
import { NestedComponent } from './pages/nested/nested.component'
import { Nested1Component } from './pages/nested/1/1.component'
import { Nested2Component } from './pages/nested/2/2.component'

// VB:REPLACE-END:ROUTER-IMPORTS

const routes: Routes = [
  {
    path: '',
    // VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT
    redirectTo: 'dashboard',
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
        component: DashboardComponent,
      },
      {
        path: 'dashboard/alpha',
        data: { title: 'Dashboard Alpha' },
        component: DashboardAlphaComponent,
      },
      {
        path: 'dashboard/beta',
        data: { title: 'Dashboard Beta' },
        component: DashboardBetaComponent,
      },
      {
        path: 'dashboard/gamma',
        data: { title: 'Dashboard Gamma' },
        component: DashboardGammaComponent,
      },
      {
        path: 'dashboard/crypto',
        data: { title: 'Crypto Terminal' },
        component: DashboardCryptoComponent,
      },
      {
        path: 'apps',
        data: { title: 'Apps' },
        component: AppsComponent,
      },
      {
        path: 'apps/profile',
        data: { title: 'Profile' },
        component: AppsProfileComponent,
      },
      {
        path: 'apps/calendar',
        data: { title: 'Calendar' },
        component: AppsCalendarComponent,
      },
      {
        path: 'apps/gallery',
        data: { title: 'Gallery' },
        component: AppsGalleryComponent,
      },
      {
        path: 'apps/messaging',
        data: { title: 'Messaging' },
        component: AppsMessagingComponent,
      },
      {
        path: 'apps/mail',
        data: { title: 'Mail' },
        component: AppsMailComponent,
      },
      {
        path: 'extra-apps',
        data: { title: 'Extra Apps' },
        component: ExtraAppsComponent,
      },
      {
        path: 'extra-apps/github-explore',
        data: { title: 'Github Explore' },
        component: ExtraAppsGithubExploreComponent,
      },
      {
        path: 'extra-apps/github-discuss',
        data: { title: 'Github Discuss' },
        component: ExtraAppsGithubDiscussComponent,
      },
      {
        path: 'extra-apps/digitalocean-droplets',
        data: { title: 'Digitalocean Droplets' },
        component: ExtraAppsDigitaloceanDropletsComponent,
      },
      {
        path: 'extra-apps/digitalocean-create',
        data: { title: 'Digitalocean Create' },
        component: ExtraAppsDigitaloceanCreateComponent,
      },
      {
        path: 'extra-apps/google-analytics',
        data: { title: 'Google Analytics' },
        component: ExtraAppsGoogleAnalyticsComponent,
      },
      {
        path: 'extra-apps/wordpress-post',
        data: { title: 'Wordpress Post' },
        component: ExtraAppsWordpressPostComponent,
      },
      {
        path: 'extra-apps/wordpress-posts',
        data: { title: 'Wordpress Posts' },
        component: ExtraAppsWordpressPostsComponent,
      },
      {
        path: 'extra-apps/wordpress-add',
        data: { title: 'Wordpress Add' },
        component: ExtraAppsWordpressAddComponent,
      },
      {
        path: 'extra-apps/todoist-list',
        data: { title: 'Todoist List' },
        component: ExtraAppsTodoistListComponent,
      },
      {
        path: 'extra-apps/jira-dashboard',
        data: { title: 'Jira Dashboard' },
        component: ExtraAppsJiraDashboardComponent,
      },
      {
        path: 'extra-apps/jira-agile-board',
        data: { title: 'Jira Agile Board' },
        component: ExtraAppsJiraAgileBoardComponent,
      },
      {
        path: 'extra-apps/helpdesk-dashboard',
        data: { title: 'Helpdesk Dashboard' },
        component: ExtraAppsHelpdeskDashboardComponent,
      },
      {
        path: 'ecommerce',
        data: { title: 'Ecommerce' },
        component: EcommerceComponent,
      },
      {
        path: 'ecommerce/dashboard',
        data: { title: 'Dashboard' },
        component: EcommerceDashboardComponent,
      },
      {
        path: 'ecommerce/orders',
        data: { title: 'Orders' },
        component: EcommerceOrdersComponent,
      },
      {
        path: 'ecommerce/product-catalog',
        data: { title: 'Product Catalog' },
        component: EcommerceProductCatalogComponent,
      },
      {
        path: 'ecommerce/product-details',
        data: { title: 'Product Details' },
        component: EcommerceProductDetailsComponent,
      },
      {
        path: 'ecommerce/cart',
        data: { title: 'Cart' },
        component: EcommerceCartComponent,
      },
      {
        path: 'ui-kits/antd',
        data: { title: 'Ant Design' },
        component: UiKitsAntdComponent,
      },
      {
        path: 'ui-kits/bootstrap',
        data: { title: 'Bootstrap' },
        component: UiKitsBootstrapComponent,
      },
      {
        path: 'widgets',
        data: { title: 'Widgets' },
        component: WidgetsComponent,
      },
      {
        path: 'widgets/general',
        data: { title: 'General' },
        component: WidgetsGeneralComponent,
      },
      {
        path: 'widgets/lists',
        data: { title: 'Lists' },
        component: WidgetsListsComponent,
      },
      {
        path: 'widgets/tables',
        data: { title: 'Tables' },
        component: WidgetsTablesComponent,
      },
      {
        path: 'widgets/charts',
        data: { title: 'Charts' },
        component: WidgetsChartsComponent,
      },
      {
        path: 'cards',
        data: { title: 'Cards' },
        component: CardsComponent,
      },
      {
        path: 'cards/basic',
        data: { title: 'Basic Cards' },
        component: CardsBasicComponent,
      },
      {
        path: 'cards/tabbed',
        data: { title: 'Tabbed Cards' },
        component: CardsTabbedComponent,
      },
      {
        path: 'tables',
        data: { title: 'Tables' },
        component: TablesComponent,
      },
      {
        path: 'tables/antd',
        data: { title: 'Ant Design' },
        component: TablesAntdComponent,
      },
      {
        path: 'tables/bootstrap',
        data: { title: 'Bootstrap' },
        component: TablesBootstrapComponent,
      },
      {
        path: 'charts',
        data: { title: 'Charts' },
        component: ChartsComponent,
      },
      {
        path: 'charts/chartistjs',
        data: { title: 'Chartist.js' },
        component: ChartsChartistjsComponent,
      },
      {
        path: 'charts/chartjs',
        data: { title: 'Chart.js' },
        component: ChartsChartjsComponent,
      },
      {
        path: 'charts/C3',
        data: { title: 'C3' },
        component: ChartsC3Component,
      },
      {
        path: 'icons',
        data: { title: 'Icons' },
        component: IconsComponent,
      },
      {
        path: 'icons/feather-icons',
        data: { title: 'Feather Icons' },
        component: IconsFeatherIconsComponent,
      },
      {
        path: 'icons/fontawesome',
        data: { title: 'Fontawesome' },
        component: IconsFontawesomeComponent,
      },
      {
        path: 'icons/linearicons-free',
        data: { title: 'Linearicons' },
        component: IconsLineariconsFreeComponent,
      },
      {
        path: 'icons/icomoon-free',
        data: { title: 'Icomoon Free' },
        component: IconsIcomoonFreeComponent,
      },
      {
        path: 'advanced/form-examples',
        data: { title: 'Form Examples' },
        component: AdvancedFormExamplesComponent,
      },
      {
        path: 'advanced/email-templates',
        data: { title: 'Email Templates' },
        component: AdvancedEmailTemplatesComponent,
      },
      {
        path: 'advanced/pricing-tables',
        data: { title: 'Pricing Tables' },
        component: AdvancedPricingTablesComponent,
      },
      {
        path: 'advanced/invoice',
        data: { title: 'Invoice' },
        component: AdvancedInvoiceComponent,
      },
      {
        path: 'advanced/utilities',
        data: { title: 'Utilities' },
        component: AdvancedUtilitiesComponent,
      },
      {
        path: 'advanced/grid',
        data: { title: 'Grid' },
        component: AdvancedGridComponent,
      },
      {
        path: 'advanced/typography',
        data: { title: 'Typography' },
        component: AdvancedTypographyComponent,
      },
      {
        path: 'advanced/colors',
        data: { title: 'Colors' },
        component: AdvancedColorsComponent,
      },
      {
        path: 'nested',
        data: { title: 'Nested Items' },
        component: NestedComponent,
      },
      {
        path: 'nested/1',
        data: { title: 'Level 1' },
        component: Nested1Component,
      },
      {
        path: 'nested/2',
        data: { title: 'Level 2' },
        component: Nested2Component,
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
    DashboardComponent,
    DashboardAlphaComponent,
    DashboardBetaComponent,
    DashboardGammaComponent,
    DashboardCryptoComponent,
    AppsComponent,
    AppsProfileComponent,
    AppsCalendarComponent,
    AppsGalleryComponent,
    AppsMessagingComponent,
    AppsMailComponent,
    ExtraAppsComponent,
    ExtraAppsGithubExploreComponent,
    ExtraAppsGithubDiscussComponent,
    ExtraAppsDigitaloceanDropletsComponent,
    ExtraAppsDigitaloceanCreateComponent,
    ExtraAppsGoogleAnalyticsComponent,
    ExtraAppsWordpressPostComponent,
    ExtraAppsWordpressPostsComponent,
    ExtraAppsWordpressAddComponent,
    ExtraAppsTodoistListComponent,
    ExtraAppsJiraDashboardComponent,
    ExtraAppsJiraAgileBoardComponent,
    ExtraAppsHelpdeskDashboardComponent,
    EcommerceComponent,
    EcommerceDashboardComponent,
    EcommerceOrdersComponent,
    EcommerceProductCatalogComponent,
    EcommerceProductDetailsComponent,
    EcommerceCartComponent,
    UiKitsAntdComponent,
    UiKitsBootstrapComponent,
    WidgetsComponent,
    WidgetsGeneralComponent,
    WidgetsListsComponent,
    WidgetsTablesComponent,
    WidgetsChartsComponent,
    CardsComponent,
    CardsBasicComponent,
    CardsTabbedComponent,
    TablesComponent,
    TablesAntdComponent,
    TablesBootstrapComponent,
    ChartsComponent,
    ChartsChartistjsComponent,
    ChartsChartjsComponent,
    ChartsC3Component,
    IconsComponent,
    IconsFeatherIconsComponent,
    IconsFontawesomeComponent,
    IconsLineariconsFreeComponent,
    IconsIcomoonFreeComponent,
    AdvancedFormExamplesComponent,
    AdvancedEmailTemplatesComponent,
    AdvancedPricingTablesComponent,
    AdvancedInvoiceComponent,
    AdvancedUtilitiesComponent,
    AdvancedGridComponent,
    AdvancedTypographyComponent,
    AdvancedColorsComponent,
    NestedComponent,
    Nested1Component,
    Nested2Component,

    // VB:REPLACE-END:ROUTER-DECLARATIONS
  ],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule {}
