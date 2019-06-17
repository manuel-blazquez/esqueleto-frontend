import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/index.service';
import { User, Role } from '../../models/index.models';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  guardar( currentUser: User ) {

    this.currentUser.profile.name = currentUser.profile.name;
    
   // this._usuarioService.actualizarUsuario( this.usuario )
   //             .subscribe();

  }

  seleccionImage( archivo: File ) {

    //if ( !archivo ) {
    //  this.imagenSubir = null;
    //  return;
    //}
//
    //if ( archivo.type.indexOf('image') < 0 ) {
    //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
    //  this.imagenSubir = null;
    //  return;
    //}
//
    //this.imagenSubir = archivo;
//
    //let reader = new FileReader();
    //let urlImagenTemp = reader.readAsDataURL( archivo );
//
    //// reader.onloadend = () => this.imagenTemp = reader.result;

  }

  cambiarImagen() {

  //  this._usuarioService.cambiarImagen( this.imagenSubir, this.currentUser.id );

  }

}
