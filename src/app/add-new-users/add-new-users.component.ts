import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { GeneralService } from '../services/general.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-users',
  templateUrl: './add-new-users.component.html',
  styleUrls: ['./add-new-users.component.scss']
})
export class AddNewUsersComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  user: User;

  constructor(private api: GeneralService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  get f () {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.user = {
      email: this.userForm.value['email'],
      username: this.userForm.value['username'],
      password: this.userForm.value['password']
    };

    this.api.createUser(this.user).subscribe( data => {
      // console.log(data);
      if (data.code === 0) {
          this.router.navigate(['/admin/users']);
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
