import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TablesComponent } from '../tables/tables.component';
import { IconsComponent } from '../icons/icons.component';
import { TypographyComponent } from '../typography/typography.component';
import { AlertsComponent } from '../alerts/alerts.component';
import { AccordionsComponent } from '../accordions/accordions.component';
import { BadgesComponent } from '../badges/badges.component';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { TooltipsComponent } from '../tooltips/tooltips.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { TabsComponent } from '../tabs/tabs.component';
import { AdminComponent } from './admin.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { UsersComponent } from '../users/users.component';
import { ReservationTablesComponent } from '../reservation-tables/reservation-tables.component';
import { AddNewBookingsComponent } from '../add-new-bookings/add-new-bookings.component';
import { AddNewTablesComponent } from '../add-new-tables/add-new-tables.component';
import { AddNewUsersComponent } from '../add-new-users/add-new-users.component';
import { AuthGaurdService } from '../services/auth-guard.service';


const routes: Routes = [
    {
        path : 'admin',
        component : AdminComponent,
        canActivateChild: [AuthGaurdService],
        children : [
            {
                path : '',
                children : [
                    { path: 'admin', component: AdminComponent},
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'bookings', component: BookingsComponent },
                    { path: 'reservation-tables', component: ReservationTablesComponent },
                    { path: 'new-booking', component: AddNewBookingsComponent },
                    { path: 'new-table', component: AddNewTablesComponent },
                    { path: 'new-user', component: AddNewUsersComponent },
                    { path: 'users', component: UsersComponent },
                    { path: '**' , redirectTo: '/404'}
                ]
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRouting {}
