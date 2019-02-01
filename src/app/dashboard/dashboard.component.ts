import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Booking } from '../models/booking';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  total_users: number;
  total_bookings: number;
  total_tables: number;
  total_active_bookings: number;
  bookings: Booking[];
  page = 1;

  constructor(private service: GeneralService) { }

  ngOnInit() {
    this.getTotalBookings();
    this.getTotalUsers();
    this.getTotalTables();
  }

  getTotalUsers () {
    this.service.getAllUser().pipe(first()).subscribe(data => {
      this.total_users = data.resources.length;
    });
  }

  getTotalBookings() {
    this.service.getAllBookings().pipe(first()).subscribe(data => {
      this.total_bookings = data.resources.length;
      this.bookings = data.resources;
    });
  }

  getTotalTables() {
    this.service.getAllReservationTables().pipe(first()).subscribe( data => {
      this.total_tables = data.resources.length;
    });
  }



}
