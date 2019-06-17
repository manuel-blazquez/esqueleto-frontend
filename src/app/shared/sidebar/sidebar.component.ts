import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/index.service';

import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index.service';
import { User, Role } from '../../models/index.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  currentUser: User;

  

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _sidebar: SidebarService,
    private _userService: UserService,
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }



}
