import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private url = 'http://localhost:3000/users/register';
  newUser: {
    username: string,
    email: string,
    password: string
  };
  constructor(private http: HttpClient) { }



  // onCreateUsert(createUser: {email: string, password: string}) {
  //   this.http.post(this.url, createUser).subscribe();
  //   console.log(createUser);
  // }

  onCreateUsert(createUser: NgForm) {
    this.newUser = createUser.value;
    this.http.post(this.url, this.newUser).subscribe();
    createUser.reset();
    }



  ngOnInit() {
  }

}
