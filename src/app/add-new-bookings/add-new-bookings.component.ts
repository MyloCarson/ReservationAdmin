import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Table } from '../models/table';
import { GeneralService } from '../services/general.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../models/booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-bookings',
  templateUrl: './add-new-bookings.component.html',
  styleUrls: ['./add-new-bookings.component.scss']
})
export class AddNewBookingsComponent implements OnInit {
  bookingForm: FormGroup;
  tables: Table[];
  submitted = false;
  booking: Booking;

  constructor(private service: GeneralService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private api: GeneralService,
    private router: Router) { }

  ngOnInit() {
    this.getAvailableTables();
    this.bookingForm = new FormGroup({
      booking_name: new FormControl('', Validators.required),
      booking_date: new FormControl('', Validators.required),
      booking_time: new FormControl('', Validators.required),
      tableControl: new FormControl('', Validators.required)
    });
  }


  getAvailableTables() {
    this.service.getAllReservationTables().pipe(first()).subscribe( data => {
    // console.warn(this.tables = data.resources);
    // this.tables = data.resources;
      if (data.resources.length > 0) {
        this.tables = data.resources;
      } else {
        this.toast.info('Sorry, no table found', 'Status', {
          closeButton: true,
          disableTimeOut: true
        });
    }
  }, error => {
        this.toast.error('Cannot fetch tables right now!', 'Status', {
          closeButton: true,
          disableTimeOut: true
        });
    });
  }
  get f () {
    return this.bookingForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookingForm.invalid) {
        return;
    }

    this.booking = {
      booking_name: this.bookingForm.value['booking_name'],
      booking_time: this.bookingForm.value['booking_time'],
      booking_date: this.bookingForm.value['booking_date'],
      booking_status: 'true',
      table_id: this.bookingForm.value['tableControl']
    };

    this.api.createBooking(this.booking).subscribe( data => {
      if (data.code === 0) {
          this.router.navigate(['/admin/bookings']);
      } else {
        this.toast.error ('Failed', 'status', {
          closeButton: true,
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      }
    }, error => {
      this.toast.error (error.error.message, 'status', {
        closeButton: true,
        disableTimeOut: true
      });
    });



  }

}
