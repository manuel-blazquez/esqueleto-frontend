import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' },
        
      ]
    },
    
    
  ];

  menuAdmin: any = [
    {
      titulo: 'Admin',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Usuarios', url: '/admin' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' },
      ]
    },
  ]

  constructor() { }
}
