import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/index.models';
import { UserService, AuthenticationService } from '../../services/index.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  userFromApi: User;


  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
    
  }

  ngOnInit() {
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
          this.userFromApi = user;
      });
      
  }

}
