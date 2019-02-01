import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  constructor() { }
  admin: Admin;
  ngOnInit() {
    this.admin = JSON.parse(sessionStorage.getItem('admin'));
  }

}
