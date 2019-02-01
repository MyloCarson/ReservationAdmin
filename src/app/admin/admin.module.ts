import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TablesComponent } from '../tables/tables.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
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

import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRouting } from './admin_routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AdminRouting,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
],
  declarations: []
})


export class AdminModule { }
