import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private url = 'http://localhost:3000/users/login';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onlogin(inputLogin: HTMLInputElement) {
    console.log(inputLogin);
    this.http.post(this.url, inputLogin).subscribe((res) => {
      console.log(res);
    });
  }

}
