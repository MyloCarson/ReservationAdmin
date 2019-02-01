import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';
import { ReservationTablesComponent } from './reservation-tables/reservation-tables.component';
import { AddNewBookingsComponent } from './add-new-bookings/add-new-bookings.component';
import { AddNewTablesComponent } from './add-new-tables/add-new-tables.component';
import { AddNewUsersComponent } from './add-new-users/add-new-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent}
  // { path: 'login', component: LoginComponent },
  // { path: 'admin', component: AdminComponent}
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'bookings', component: BookingsComponent },
  // { path: 'reservation-tables', component: ReservationTablesComponent },
  // { path: 'new-booking', component: AddNewBookingsComponent },
  // { path: 'new-table', component: AddNewTablesComponent },
  // { path: 'new-user', component: AddNewUsersComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'forms', component: FormsComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'tables', component: TablesComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordions', component: AccordionsComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'progressbar', component: ProgressbarComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'dropdowns', component: DropdownComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
