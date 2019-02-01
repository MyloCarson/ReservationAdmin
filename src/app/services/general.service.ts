import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/userResponse';
import { BookingResponse } from '../models/bookingResponse';
import { TableResponse } from '../models/tableResponse';
import { Booking } from '../models/booking';
import { Table } from '../models/table';
import { User } from '../models/user';
import { Admin } from '../models/admin';
import { AdminResponse } from '../models/adminResponse';
import { DeleteResponse } from '../models/deleteResponse';
import { PlainBookingResponse } from '../models/plainBookingResponse';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  // baseUrl = 'http://localhost/reservationApi';
  baseUrl = 'https://testthesms.000webhostapp.com/reservation';
  // baseUrl = 'http://127.0.0.1/reservationApi';

  public getAllUser(): Observable<UserResponse |any> {
    return this.http.get<UserResponse |any>(this.baseUrl + '/users');
  }
  public getAllBookings(): Observable<BookingResponse |any> {
    return this.http.get<BookingResponse |any>(this.baseUrl + '/bookings');
  }

  public getAllReservationTables(): Observable<TableResponse|any> {
    return this.http.get<any>(this.baseUrl + '/tables');
  }
  public login(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl + '/login', user);
  }

  public adminLogin(admin: Admin): Observable<AdminResponse> {
    return this.http.post<AdminResponse>(this.baseUrl + '/admin/login', admin);
  }

  public createBooking(booking: Booking): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(this.baseUrl + '/bookings', booking);
  }

  public createTable(table: Table): Observable<TableResponse> {
    return this.http.post<TableResponse>(this.baseUrl + '/tables' , table);
  }

  public createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl + '/user', user);
  }

  public cancelBooking(booking: Booking): Observable<PlainBookingResponse> {
    return this.http.get<PlainBookingResponse>(this.baseUrl + '/bookings/cancel/' + booking.id + '/' + booking.table_id);
  }

  public deleteUser(user: User): Observable<DeleteResponse> {
    return this.http.get<DeleteResponse>(this.baseUrl + '/user/' + user.email );
  }

  public deleteTable(table: Table): Observable<DeleteResponse> {
    return this.http.get<DeleteResponse>(this.baseUrl + '/tables/' + table.id);
  }

}
