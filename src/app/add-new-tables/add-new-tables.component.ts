import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Table } from '../models/table';

@Component({
  selector: 'app-add-new-tables',
  templateUrl: './add-new-tables.component.html',
  styleUrls: ['./add-new-tables.component.scss']
})
export class AddNewTablesComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  table: Table;

  constructor(private api: GeneralService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.tableForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      availability: new FormControl('', Validators.required)
    });
  }

  get f () {
    return this.tableForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.tableForm.invalid) {
      return;
    }

    this.table = {
      name: this.tableForm.value['name'],
      description: this.tableForm.value['description'],
      is_available: this.tableForm.value['availability']
    };

    this.api.createTable(this.table).subscribe( data => {
      // console.log(data);
      if (data.code === 0) {
          this.router.navigate(['/admin/reservation-tables']);
      } else {
        this.toast.error ('Failed', 'status', {
          closeButton: true,
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      }
    }, error => {
        // console.log(error);
        this.toast.error(error.error.message, 'status' , {
          closeButton: true,
          disableTimeOut: true
        });
    });

  }



}
