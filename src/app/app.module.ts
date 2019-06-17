import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role.model';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { JwtInterceptor, ErrorInterceptor } from './helpers/index.helpers';

import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

import { SettingsService } from './services/index.service'

const appRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    loadChildren: './pages/pages.module#PagesModule',
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  // redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        SettingsService,
        
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
