import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { ChartistModule } from 'ng-chartist'
import { ChartModule } from 'angular2-chartjs'
import { UsMapModule } from 'angular-us-map'
import { QuillModule } from 'ngx-quill'
import { SortablejsModule } from 'ngx-sortablejs'
import { NestableModule } from 'ngx-nestable'
import { NgApexchartsModule } from 'ng-apexcharts'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AntdUIKitExamplesModule } from './Hidden/KitAntd/examples/antd-expamples.module'
import { BootstrapUIKitExamplesModule } from './Hidden/KitBootstrap/examples/bootstrap-expamples.module'

import { VbAppPartialsCalendarComponent } from './AppPartials/Calendar/calendar.component'
import { VbAppPartialsDoHeadComponent } from './AppPartials/DoHead/do-head.component'
import { VbAppPartialsDoImageComponent } from './AppPartials/DoImage/do-image.component'
import { VbAppPartialsDoPlanComponent } from './AppPartials/DoPlan/do-plan.component'
import { VbAppPartialsDoServerComponent } from './AppPartials/DoServer/do-server.component'
import { VbAppPartialsEcommerceProductComponent } from './AppPartials/EcommerceProduct/ecommerce-product.component'
import { VbAppPartialsGalleryComponent } from './AppPartials/Gallery/gallery.component'
import { VbAppPartialsGithubDescrComponent } from './AppPartials/GithubDescr/github-descr.component'
import { VbAppPartialsGithubDiscussComponent } from './AppPartials/GithubDiscuss/github-discuss.component'
import { VbAppPartialsGithubHeadComponent } from './AppPartials/GithubHead/github-head.component'
import { VbAppPartialsGithubHeadIssueComponent } from './AppPartials/GithubHeadIssue/github-head-issue.component'
import { VbAppPartialsGithubWriteComponent } from './AppPartials/GithubWrite/github-write.component'
import { VbAppPartialsJiraAgileBoardComponent } from './AppPartials/JiraAgileBoard/jira-agile-board.component'
import { VbAppPartialsWpPostComponent } from './AppPartials/WpPost/wp-post.component'
import { VbAppPartialsWpPostShortComponent } from './AppPartials/WpPostShort/wp-post-short.component'
import { VbAppPartialsWpWriteComponent } from './AppPartials/WpWrite/wp-write.component'

import { VbChartsC31Component } from './ChartsC3/1/1.component'
import { VbChartsC32Component } from './ChartsC3/2/2.component'
import { VbChartsC33Component } from './ChartsC3/3/3.component'
import { VbChartsC34Component } from './ChartsC3/4/4.component'
import { VbChartsC35Component } from './ChartsC3/5/5.component'
import { VbChartsC36Component } from './ChartsC3/6/6.component'
import { VbChartsC37Component } from './ChartsC3/7/7.component'
import { VbChartsC38Component } from './ChartsC3/8/8.component'
import { VbChartsC39Component } from './ChartsC3/9/9.component'
import { VbChartsC310Component } from './ChartsC3/10/10.component'
import { VbChartsC311Component } from './ChartsC3/11/11.component'
import { VbChartsC312Component } from './ChartsC3/12/12.component'

import { VbChartsChartistjs1Component } from './ChartsChartistjs/1/1.component'
import { VbChartsChartistjs2Component } from './ChartsChartistjs/2/2.component'
import { VbChartsChartistjs3Component } from './ChartsChartistjs/3/3.component'
import { VbChartsChartistjs4Component } from './ChartsChartistjs/4/4.component'
import { VbChartsChartistjs5Component } from './ChartsChartistjs/5/5.component'
import { VbChartsChartistjs6Component } from './ChartsChartistjs/6/6.component'
import { VbChartsChartistjs7Component } from './ChartsChartistjs/7/7.component'
import { VbChartsChartistjs8Component } from './ChartsChartistjs/8/8.component'
import { VbChartsChartistjs9Component } from './ChartsChartistjs/9/9.component'
import { VbChartsChartistjs10Component } from './ChartsChartistjs/10/10.component'
import { VbChartsChartistjs11Component } from './ChartsChartistjs/11/11.component'
import { VbChartsChartistjs12Component } from './ChartsChartistjs/12/12.component'

import { VbChartsChartjs1Component } from './ChartsChartjs/1/1.component'
import { VbChartsChartjs2Component } from './ChartsChartjs/2/2.component'
import { VbChartsChartjs3Component } from './ChartsChartjs/3/3.component'
import { VbChartsChartjs4Component } from './ChartsChartjs/4/4.component'
import { VbChartsChartjs5Component } from './ChartsChartjs/5/5.component'
import { VbChartsChartjs6Component } from './ChartsChartjs/6/6.component'

import { VbControlsButtonComponent } from './Controls/Button/button.component'
import { VbControlsButton2Component } from './Controls/Button2/button-2.component'
import { VbControlsButton3Component } from './Controls/Button3/button-3.component'
import { VbControlsPaginationComponent } from './Controls/Pagination/pagination.component'
import { VbControlsPagination2Component } from './Controls/Pagination2/pagination-2.component'

import { VbCryptoCryptoChartComponent } from './Crypto/CryptoChart/crypto-chart.component'
import { VbCryptoCryptoHistoryComponent } from './Crypto/CryptoHistory/crypto-history.component'
import { VbCryptoCryptoListComponent } from './Crypto/CryptoList/crypto-list.component'
import { VbCryptoCryptoLoadTableComponent } from './Crypto/CryptoLoadTable/crypto-load-table.component'
import { VbCryptoCryptoOrdersComponent } from './Crypto/CryptoOrders/crypto-orders.component'

import { VbEmails1Component } from './Emails/1/1.component'
import { VbEmails2Component } from './Emails/2/2.component'
import { VbEmails3Component } from './Emails/3/3.component'
import { VbEmails4Component } from './Emails/4/4.component'

import { VbForms1Component } from './Forms/1/1.component'
import { VbForms2Component } from './Forms/2/2.component'
import { VbForms3Component } from './Forms/3/3.component'
import { VbForms4Component } from './Forms/4/4.component'
import { VbForms5Component } from './Forms/5/5.component'
import { VbForms6Component } from './Forms/6/6.component'

import { VbHeadersCardFooterComponent } from './Headers/CardFooter/card-footer.component'
import { VbHeadersCardFooter2Component } from './Headers/CardFooter2/card-footer-2.component'
import { VbHeadersCardHeaderComponent } from './Headers/CardHeader/card-header.component'
import { VbHeadersCardHeader2Component } from './Headers/CardHeader2/card-header-2.component'
import { VbHeadersCardHeader3Component } from './Headers/CardHeader3/card-header-3.component'
import { VbHeadersCardHeader4Component } from './Headers/CardHeader4/card-header-4.component'
import { VbHeadersCardHeader5Component } from './Headers/CardHeader5/card-header-5.component'
import { VbHeadersCardHeaderTabbedComponent } from './Headers/CardHeaderTabbed/card-header-tabbed.component'
import { VbHeadersCardHeaderTabbed2Component } from './Headers/CardHeaderTabbed2/card-header-tabbed-2.component'
import { VbHeadersCardHeaderTabbed3Component } from './Headers/CardHeaderTabbed3/card-header-tabbed-3.component'
import { VbHeadersCardHeaderTabbed4Component } from './Headers/CardHeaderTabbed4/card-header-tabbed-4.component'
import { VbHeadersCardHeaderTabbed5Component } from './Headers/CardHeaderTabbed5/card-header-tabbed-5.component'
import { VbHeadersCardHeaderTabbed6Component } from './Headers/CardHeaderTabbed6/card-header-tabbed-6.component'
import { VbHeadersHeadingComponent } from './Headers/Heading/heading.component'
import { VbHeadersHeading2Component } from './Headers/Heading2/heading-2.component'
import { VbHeadersHeading3Component } from './Headers/Heading3/heading-3.component'
import { VbHeadersTagComponent } from './Headers/Tag/tag.component'

import { VbHiddenColorsComponent } from './Hidden/Colors/colors.component'
import { VbHiddenGridComponent } from './Hidden/Grid/grid.component'
import { VbHiddenIconsFeatherComponent } from './Hidden/IconsFeather/icons-feather.component'
import { VbHiddenIconsFontawesomeComponent } from './Hidden/IconsFontawesome/icons-fontawesome.component'
import { VbHiddenIconsIcomoonFreeComponent } from './Hidden/IconsIcomoonFree/icons-icomoon-free.component'
import { VbHiddenIconsLineariconsFreeComponent } from './Hidden/IconsLineariconsFree/icons-linearicons-free.component'
import { VbHiddenKitAntdComponent } from './Hidden/KitAntd/kit-antd.component'
import { VbHiddenKitBootstrapComponent } from './Hidden/KitBootstrap/kit-bootstrap.component'
import { VbHiddenTypographyComponent } from './Hidden/Typography/typography.component'
import { VbHiddenUtilitiesComponent } from './Hidden/Utilities/utilities.component'

import { VbPlaceholders1Component } from './Placeholders/1/1.component'
import { VbPlaceholders2Component } from './Placeholders/2/2.component'
import { VbPlaceholders3Component } from './Placeholders/3/3.component'

import { VbTablesAntd1Component } from './TablesAntd/1/1.component'
import { VbTablesAntd2Component } from './TablesAntd/2/2.component'
import { VbTablesAntd3Component } from './TablesAntd/3/3.component'
import { VbTablesAntd4Component } from './TablesAntd/4/4.component'
import { VbTablesAntd5Component } from './TablesAntd/5/5.component'
import { VbTablesAntd6Component } from './TablesAntd/6/6.component'
import { VbTablesAntd7Component } from './TablesAntd/7/7.component'
import { VbTablesAntd8Component } from './TablesAntd/8/8.component'
import { VbTablesAntd9Component } from './TablesAntd/9/9.component'

import { VbTablesBootstrap1Component } from './TablesBootstrap/1/1.component'
import { VbTablesBootstrap2Component } from './TablesBootstrap/2/2.component'
import { VbTablesBootstrap3Component } from './TablesBootstrap/3/3.component'
import { VbTablesBootstrap4Component } from './TablesBootstrap/4/4.component'
import { VbTablesBootstrap5Component } from './TablesBootstrap/5/5.component'
import { VbTablesBootstrap6Component } from './TablesBootstrap/6/6.component'
import { VbTablesBootstrap7Component } from './TablesBootstrap/7/7.component'
import { VbTablesBootstrap8Component } from './TablesBootstrap/8/8.component'
import { VbTablesBootstrap9Component } from './TablesBootstrap/9/9.component'

import { VbTypography1Component } from './Typography/1/1.component'
import { VbTypography2Component } from './Typography/2/2.component'
import { VbTypography3Component } from './Typography/3/3.component'
import { VbTypography4Component } from './Typography/4/4.component'
import { VbTypography5Component } from './Typography/5/5.component'

import { VbGeneral1Component } from './WidgetsGeneral/1/1.component'
import { VbGeneral1v1Component } from './WidgetsGeneral/1v1/1v1.component'
import { VbGeneral2Component } from './WidgetsGeneral/2/2.component'
import { VbGeneral2v1Component } from './WidgetsGeneral/2v1/2v1.component'
import { VbGeneral2v2Component } from './WidgetsGeneral/2v2/2v2.component'
import { VbGeneral2v3Component } from './WidgetsGeneral/2v3/2v3.component'
import { VbGeneral2v4Component } from './WidgetsGeneral/2v4/2v4.component'
import { VbGeneral3Component } from './WidgetsGeneral/3/3.component'
import { VbGeneral3v1Component } from './WidgetsGeneral/3v1/3v1.component'
import { VbGeneral4Component } from './WidgetsGeneral/4/4.component'
import { VbGeneral5Component } from './WidgetsGeneral/5/5.component'
import { VbGeneral5v1Component } from './WidgetsGeneral/5v1/5v1.component'
import { VbGeneral6Component } from './WidgetsGeneral/6/6.component'
import { VbGeneral6v1Component } from './WidgetsGeneral/6v1/6v1.component'
import { VbGeneral7Component } from './WidgetsGeneral/7/7.component'
import { VbGeneral8Component } from './WidgetsGeneral/8/8.component'
import { VbGeneral9Component } from './WidgetsGeneral/9/9.component'
import { VbGeneral10Component } from './WidgetsGeneral/10/10.component'
import { VbGeneral10v1Component } from './WidgetsGeneral/10v1/10v1.component'
import { VbGeneral11Component } from './WidgetsGeneral/11/11.component'
import { VbGeneral11v1Component } from './WidgetsGeneral/11v1/11v1.component'
import { VbGeneral12Component } from './WidgetsGeneral/12/12.component'
import { VbGeneral12v1Component } from './WidgetsGeneral/12v1/12v1.component'
import { VbGeneral12v2Component } from './WidgetsGeneral/12v2/12v2.component'
import { VbGeneral12v3Component } from './WidgetsGeneral/12v3/12v3.component'
import { VbGeneral13Component } from './WidgetsGeneral/13/13.component'
import { VbGeneral13v1Component } from './WidgetsGeneral/13v1/13v1.component'
import { VbGeneral14Component } from './WidgetsGeneral/14/14.component'
import { VbGeneral15Component } from './WidgetsGeneral/15/15.component'
import { VbGeneral16Component } from './WidgetsGeneral/16/16.component'
import { VbGeneral17Component } from './WidgetsGeneral/17/17.component'
import { VbGeneral17v1Component } from './WidgetsGeneral/17v1/17v1.component'
import { VbGeneral17v2Component } from './WidgetsGeneral/17v2/17v2.component'
import { VbGeneral18Component } from './WidgetsGeneral/18/18.component'
import { VbGeneral18v1Component } from './WidgetsGeneral/18v1/18v1.component'
import { VbGeneral19Component } from './WidgetsGeneral/19/19.component'
import { VbGeneral20Component } from './WidgetsGeneral/20/20.component'
import { VbGeneral20v1Component } from './WidgetsGeneral/20v1/20v1.component'
import { VbGeneral21Component } from './WidgetsGeneral/21/21.component'
import { VbGeneral21v1Component } from './WidgetsGeneral/21v1/21v1.component'
import { VbGeneral21v2Component } from './WidgetsGeneral/21v2/21v2.component'
import { VbGeneral21v3Component } from './WidgetsGeneral/21v3/21v3.component'
import { VbGeneral22Component } from './WidgetsGeneral/22/22.component'
import { VbGeneral23Component } from './WidgetsGeneral/23/23.component'
import { VbGeneral23v1Component } from './WidgetsGeneral/23v1/23v1.component'
import { VbGeneral24Component } from './WidgetsGeneral/24/24.component'
import { VbGeneral24v1Component } from './WidgetsGeneral/24v1/24v1.component'
import { VbGeneral25Component } from './WidgetsGeneral/25/25.component'
import { VbGeneral25v1Component } from './WidgetsGeneral/25v1/25v1.component'
import { VbGeneral26Component } from './WidgetsGeneral/26/26.component'

import { VbList1Component } from './WidgetsLists/1/1.component'
import { VbList2Component } from './WidgetsLists/2/2.component'
import { VbList3Component } from './WidgetsLists/3/3.component'
import { VbList4Component } from './WidgetsLists/4/4.component'
import { VbList5Component } from './WidgetsLists/5/5.component'
import { VbList6Component } from './WidgetsLists/6/6.component'
import { VbList7Component } from './WidgetsLists/7/7.component'
import { VbList8Component } from './WidgetsLists/8/8.component'
import { VbList9Component } from './WidgetsLists/9/9.component'
import { VbList10Component } from './WidgetsLists/10/10.component'
import { VbList11Component } from './WidgetsLists/11/11.component'
import { VbList12Component } from './WidgetsLists/12/12.component'
import { VbList13Component } from './WidgetsLists/13/13.component'
import { VbList14Component } from './WidgetsLists/14/14.component'
import { VbList15Component } from './WidgetsLists/15/15.component'
import { VbList16Component } from './WidgetsLists/16/16.component'
import { VbList17Component } from './WidgetsLists/17/17.component'
import { VbList18Component } from './WidgetsLists/18/18.component'
import { VbList19Component } from './WidgetsLists/19/19.component'
import { VbList20Component } from './WidgetsLists/20/20.component'
import { VbList21Component } from './WidgetsLists/21/21.component'
import { VbList21v1Component } from './WidgetsLists/21v1/21v1.component'
import { VbList21v2Component } from './WidgetsLists/21v2/21v2.component'
import { VbList22Component } from './WidgetsLists/22/22.component'
import { VbList23Component } from './WidgetsLists/23/23.component'
import { VbList24Component } from './WidgetsLists/24/24.component'
import { VbList25Component } from './WidgetsLists/25/25.component'
import { VbList26Component } from './WidgetsLists/26/26.component'
import { VbList27Component } from './WidgetsLists/27/27.component'
import { VbList28Component } from './WidgetsLists/28/28.component'

import { VbChart1Component } from './WidgetsCharts/1/1.component'
import { VbChart2Component } from './WidgetsCharts/2/2.component'
import { VbChart3Component } from './WidgetsCharts/3/3.component'
import { VbChart4Component } from './WidgetsCharts/4/4.component'
import { VbChart4v1Component } from './WidgetsCharts/4v1/4v1.component'
import { VbChart4v2Component } from './WidgetsCharts/4v2/4v2.component'
import { VbChart4v3Component } from './WidgetsCharts/4v3/4v3.component'
import { VbChart5Component } from './WidgetsCharts/5/5.component'
import { VbChart6Component } from './WidgetsCharts/6/6.component'
import { VbChart7Component } from './WidgetsCharts/7/7.component'
import { VbChart8Component } from './WidgetsCharts/8/8.component'
import { VbChart9Component } from './WidgetsCharts/9/9.component'
import { VbChart10Component } from './WidgetsCharts/10/10.component'
import { VbChart11Component } from './WidgetsCharts/11/11.component'
import { VbChart11v1Component } from './WidgetsCharts/11v1/11v1.component'
import { VbChart11v2Component } from './WidgetsCharts/11v2/11v2.component'
import { VbChart12Component } from './WidgetsCharts/12/12.component'
import { VbChart12v1Component } from './WidgetsCharts/12v1/12v1.component'
import { VbChart13Component } from './WidgetsCharts/13/13.component'
import { VbChart13v1Component } from './WidgetsCharts/13v1/13v1.component'
import { VbChart13v2Component } from './WidgetsCharts/13v2/13v2.component'

import { VbTable1Component } from './WidgetsTables/1/1.component'
import { VbTable2Component } from './WidgetsTables/2/2.component'
import { VbTable3Component } from './WidgetsTables/3/3.component'
import { VbTable4Component } from './WidgetsTables/4/4.component'
import { VbTable5Component } from './WidgetsTables/5/5.component'
import { VbTable6Component } from './WidgetsTables/6/6.component'
import { VbTable7Component } from './WidgetsTables/7/7.component'
import { VbTable8Component } from './WidgetsTables/8/8.component'

const COMPONENTS = [
  VbAppPartialsCalendarComponent,
  VbAppPartialsDoHeadComponent,
  VbAppPartialsDoImageComponent,
  VbAppPartialsDoPlanComponent,
  VbAppPartialsDoServerComponent,
  VbAppPartialsEcommerceProductComponent,
  VbAppPartialsGalleryComponent,
  VbAppPartialsGithubDescrComponent,
  VbAppPartialsGithubDiscussComponent,
  VbAppPartialsGithubHeadComponent,
  VbAppPartialsGithubHeadIssueComponent,
  VbAppPartialsGithubWriteComponent,
  VbAppPartialsJiraAgileBoardComponent,
  VbAppPartialsWpPostComponent,
  VbAppPartialsWpPostShortComponent,
  VbAppPartialsWpWriteComponent,

  VbChartsC31Component,
  VbChartsC32Component,
  VbChartsC33Component,
  VbChartsC34Component,
  VbChartsC35Component,
  VbChartsC36Component,
  VbChartsC37Component,
  VbChartsC38Component,
  VbChartsC39Component,
  VbChartsC310Component,
  VbChartsC311Component,
  VbChartsC312Component,

  VbChartsChartistjs1Component,
  VbChartsChartistjs2Component,
  VbChartsChartistjs3Component,
  VbChartsChartistjs4Component,
  VbChartsChartistjs5Component,
  VbChartsChartistjs6Component,
  VbChartsChartistjs7Component,
  VbChartsChartistjs8Component,
  VbChartsChartistjs9Component,
  VbChartsChartistjs10Component,
  VbChartsChartistjs11Component,
  VbChartsChartistjs12Component,

  VbChartsChartjs1Component,
  VbChartsChartjs2Component,
  VbChartsChartjs3Component,
  VbChartsChartjs4Component,
  VbChartsChartjs5Component,
  VbChartsChartjs6Component,

  VbControlsButtonComponent,
  VbControlsButton2Component,
  VbControlsButton3Component,
  VbControlsPaginationComponent,
  VbControlsPagination2Component,

  VbCryptoCryptoChartComponent,
  VbCryptoCryptoHistoryComponent,
  VbCryptoCryptoListComponent,
  VbCryptoCryptoLoadTableComponent,
  VbCryptoCryptoOrdersComponent,

  VbEmails1Component,
  VbEmails2Component,
  VbEmails3Component,
  VbEmails4Component,

  VbForms1Component,
  VbForms2Component,
  VbForms3Component,
  VbForms4Component,
  VbForms5Component,
  VbForms6Component,

  VbHeadersCardFooterComponent,
  VbHeadersCardFooter2Component,
  VbHeadersCardHeaderComponent,
  VbHeadersCardHeader2Component,
  VbHeadersCardHeader3Component,
  VbHeadersCardHeader4Component,
  VbHeadersCardHeader5Component,
  VbHeadersCardHeaderTabbedComponent,
  VbHeadersCardHeaderTabbed2Component,
  VbHeadersCardHeaderTabbed3Component,
  VbHeadersCardHeaderTabbed4Component,
  VbHeadersCardHeaderTabbed5Component,
  VbHeadersCardHeaderTabbed6Component,
  VbHeadersHeadingComponent,
  VbHeadersHeading2Component,
  VbHeadersHeading3Component,
  VbHeadersTagComponent,

  VbHiddenColorsComponent,
  VbHiddenGridComponent,
  VbHiddenIconsFeatherComponent,
  VbHiddenIconsFontawesomeComponent,
  VbHiddenIconsIcomoonFreeComponent,
  VbHiddenIconsLineariconsFreeComponent,
  VbHiddenKitAntdComponent,
  VbHiddenKitBootstrapComponent,
  VbHiddenTypographyComponent,
  VbHiddenUtilitiesComponent,

  VbPlaceholders1Component,
  VbPlaceholders2Component,
  VbPlaceholders3Component,

  VbTablesAntd1Component,
  VbTablesAntd2Component,
  VbTablesAntd3Component,
  VbTablesAntd4Component,
  VbTablesAntd5Component,
  VbTablesAntd6Component,
  VbTablesAntd7Component,
  VbTablesAntd8Component,
  VbTablesAntd9Component,

  VbTablesBootstrap1Component,
  VbTablesBootstrap2Component,
  VbTablesBootstrap3Component,
  VbTablesBootstrap4Component,
  VbTablesBootstrap5Component,
  VbTablesBootstrap6Component,
  VbTablesBootstrap7Component,
  VbTablesBootstrap8Component,
  VbTablesBootstrap9Component,

  VbTypography1Component,
  VbTypography2Component,
  VbTypography3Component,
  VbTypography4Component,
  VbTypography5Component,

  VbGeneral1Component,
  VbGeneral1v1Component,
  VbGeneral2Component,
  VbGeneral2v1Component,
  VbGeneral2v2Component,
  VbGeneral2v3Component,
  VbGeneral2v4Component,
  VbGeneral3Component,
  VbGeneral3v1Component,
  VbGeneral4Component,
  VbGeneral5Component,
  VbGeneral5v1Component,
  VbGeneral6Component,
  VbGeneral6v1Component,
  VbGeneral7Component,
  VbGeneral8Component,
  VbGeneral9Component,
  VbGeneral10Component,
  VbGeneral10v1Component,
  VbGeneral11Component,
  VbGeneral11v1Component,
  VbGeneral12Component,
  VbGeneral12v1Component,
  VbGeneral12v2Component,
  VbGeneral12v3Component,
  VbGeneral13Component,
  VbGeneral13v1Component,
  VbGeneral14Component,
  VbGeneral15Component,
  VbGeneral16Component,
  VbGeneral17Component,
  VbGeneral17v1Component,
  VbGeneral17v2Component,
  VbGeneral18Component,
  VbGeneral18v1Component,
  VbGeneral19Component,
  VbGeneral20Component,
  VbGeneral20v1Component,
  VbGeneral21Component,
  VbGeneral21v1Component,
  VbGeneral21v2Component,
  VbGeneral21v3Component,
  VbGeneral22Component,
  VbGeneral23Component,
  VbGeneral23v1Component,
  VbGeneral24Component,
  VbGeneral24v1Component,
  VbGeneral25Component,
  VbGeneral25v1Component,
  VbGeneral26Component,

  VbList1Component,
  VbList2Component,
  VbList3Component,
  VbList4Component,
  VbList5Component,
  VbList6Component,
  VbList7Component,
  VbList8Component,
  VbList9Component,
  VbList10Component,
  VbList11Component,
  VbList12Component,
  VbList13Component,
  VbList14Component,
  VbList15Component,
  VbList16Component,
  VbList17Component,
  VbList18Component,
  VbList19Component,
  VbList20Component,
  VbList21Component,
  VbList21v1Component,
  VbList21v2Component,
  VbList22Component,
  VbList23Component,
  VbList24Component,
  VbList25Component,
  VbList26Component,
  VbList27Component,
  VbList28Component,

  VbChart1Component,
  VbChart2Component,
  VbChart3Component,
  VbChart4Component,
  VbChart4v1Component,
  VbChart4v2Component,
  VbChart4v3Component,
  VbChart5Component,
  VbChart6Component,
  VbChart7Component,
  VbChart8Component,
  VbChart9Component,
  VbChart10Component,
  VbChart11Component,
  VbChart11v1Component,
  VbChart11v2Component,
  VbChart12Component,
  VbChart12v1Component,
  VbChart13Component,
  VbChart13v1Component,
  VbChart13v2Component,

  VbTable1Component,
  VbTable2Component,
  VbTable3Component,
  VbTable4Component,
  VbTable5Component,
  VbTable6Component,
  VbTable7Component,
  VbTable8Component,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ChartistModule,
    ChartModule,
    CommonModule,
    UsMapModule,
    QuillModule.forRoot(),
    SortablejsModule,
    NestableModule,
    NgApexchartsModule,
    NgbModule,
    AntdUIKitExamplesModule, // antd examples (src/app/@vb/widgets/Hidden/KitAntd/examples)
    BootstrapUIKitExamplesModule, // boostrap examples (src/app/@vb/widgets/Hidden/KitBootstrap/examples)
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class WidgetsComponentsModule {}
