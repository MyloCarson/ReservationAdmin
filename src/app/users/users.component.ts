import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  deleteUser: User;
  page = 1;
  constructor(private service: GeneralService, private router: Router,
    private modalService: NgbModal,
    private toast: ToastrService) { }

  ngOnInit() {
    this.getTotalUsers();
  }

  goToCreateUser() {
    this.router.navigate(['/admin/new-user']);
  }

  getTotalUsers () {
    this.service.getAllUser().subscribe(data => {
      this.users = data.resources;
      // console.log(this.users)
    });
  }

  edit(user) {

  }
  attemptDelete(content, user:  User) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.deleteUser = user;
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  delete() {
    this.service.deleteUser(this.deleteUser).subscribe( data => {
      // console.warn(data);
        this.modalService.dismissAll();
        this.toast.success(this.deleteUser.username + ' deleted!!', 'Status', {
          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true
        });
        this.users.splice(this.users.indexOf(this.deleteUser), 1);
    }, error => {
      this.toast.error( 'Error', 'Status', {
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        timeOut: 10000
      });
    });
  }


}
