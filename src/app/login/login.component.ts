import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { GeneralService } from '../services/general.service';
import { User } from '../models/user';
import { Admin } from '../models/admin';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    admin: Admin;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private service: GeneralService,
    private toast: ToastrService,
    private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.getIsLoggedIn()) {
      this.router.navigate(['/admin/dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.admin = {
      username: this.f.username.value,
      password: this.f.password.value
    };
    // console.log(this.admin);
    this.loading = true;
    this.service.adminLogin(this.admin)
        // .pipe(first())
        .subscribe(
            data => {
              if (data.code === 0) {
                this.auth.login();
                sessionStorage.setItem('admin', JSON.stringify(data.resources));
                // console.log(data);
               this.router.navigate(['/admin/dashboard']);
              } else {
                this.loading = false;
                this.toast.error(data.message, 'Status', {
                  closeButton: true,
                  disableTimeOut: true,
                  progressBar: true,
                  progressAnimation: 'increasing'
                });
              }
            },
            error => {
                // this.alert.error(error);
                this.loading = false;
                this.toast.error(error.error.message, 'Status', {
                  closeButton: true,
                  disableTimeOut: true,
                  progressBar: true,
                  progressAnimation: 'increasing'
                });
            });
  }
}
