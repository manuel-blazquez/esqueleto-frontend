import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/index.models';
import { UserService, AuthenticationService } from '../../services/index.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [],
  
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor( 

    private userService: UserService,
    private authenticationService: AuthenticationService ) { }

  ngOnInit() {
    this.loadUsers();
      
  }

  loadUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

  deleteUser( user: User) {

    if ( user.id === this.authenticationService.currentUserValue.id ) {
      // this._swal2.error({title: 'No puede borrar usuario', text: 'No se puede borrar a si mismo'});
      return
    }
    this.userService.deleteById(user.id).subscribe( () => this.loadUsers());
  }

}
