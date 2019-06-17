import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component'

import { AuthGuard } from '../guards/auth.guard';
import { Role } from '../models/role.model';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './admin/user.component';


const routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.admin], titulo: 'Admin' }
  },
  { path: 'perfil', component: ProfileComponent, data: { titulo: 'Mi Perfil' }},
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' }},
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},


];

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AccountSettingsComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PagesModule { }
