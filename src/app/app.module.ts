import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetComponent } from './get/get.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: '', component: FormComponent},
  { path: 'get', component: GetComponent},
  { path: 'users', component: UsersComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    GetComponent,
    SignupComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
