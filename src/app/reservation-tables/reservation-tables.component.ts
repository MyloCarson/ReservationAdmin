import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation-tables',
  templateUrl: './reservation-tables.component.html',
  styleUrls: ['./reservation-tables.component.scss']
})
export class ReservationTablesComponent implements OnInit {
  tables: Table[];
  deleteTable: Table;
  page = 1;
  constructor(private service: GeneralService, private router: Router,
    private modalService: NgbModal,
    private toast: ToastrService) { }

  ngOnInit() {
    this.getTotalTables();
  }

  goToCreateTable() {
    this.router.navigate(['/admin/new-table']);
  }

  getTotalTables() {
    this.service.getAllReservationTables().subscribe( data => {
      this.tables = data.resources;
      // console.log(this.tables)
    });
  }

  edit(table) {

  }
  attemptDelete(content, table:  Table) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.deleteTable = table;
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  delete() {
    this.service.deleteTable(this.deleteTable).subscribe( data => {
      // console.warn(data);
        this.modalService.dismissAll();
        this.toast.success(this.deleteTable.name + ' deleted!!', 'Status', {
          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true
        });
        this.tables.splice(this.tables.indexOf(this.deleteTable), 1);
    }, error => {
      this.modalService.dismissAll();
      this.toast.error( error.error.message, 'Status', {
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        timeOut: 10000
      });
    });
  }

}
