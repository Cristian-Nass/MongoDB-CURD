import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

const user = {
  email: 'cristian@gmail.com',
  password: '762931896'
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onlogin() {
    this.authService.login(user);
  }

}
