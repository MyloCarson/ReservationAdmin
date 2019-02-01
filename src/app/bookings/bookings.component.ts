import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Booking } from '../models/booking';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  deleteBooking: Booking;
  page = 1;

  constructor(private service: GeneralService, private router: Router,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private toast: ToastrService) { }

  ngOnInit() {
    this.getTotalBookings();
  }

  createBooking() {
    this.router.navigate(['/admin/new-booking']);
  }

  getTotalBookings() {
    this.service.getAllBookings().subscribe(data => {
      this.bookings = data.resources;
      // console.log(this.bookings);
    });
  }

  edit(booking) {

  }
  attemptDelete(content, booking:  Booking) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.deleteBooking = booking;
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  delete() {
    this.service.cancelBooking(this.deleteBooking ).subscribe( data => {
      // console.warn(data);
        this.modalService.dismissAll();
        this.toast.success(this.deleteBooking.booking_name + ' cancelled!!', 'Status', {
          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true
        });
        // this.bookin.splice(this.allNews.indexOf(this.deleteNews), 1);
        // this.bookings.
    }, error => {
      console.log(error);
      this.toast.error( 'Error', 'Status', {
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        timeOut: 10000
      });
    });
  }

}
