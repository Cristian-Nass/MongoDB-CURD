import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any[] = [];
  private url = 'http://localhost:3000/users';
  constructor(private http: HttpClient, public authService: AuthService) {
    this.http.get(this.url)
      .subscribe((response: string[]) => {
        console.log(response);
        this.userList = response;
      });
  }

    ngOnInit() {

      console.log(this.authService.isAuthenticated());

      // this.authService.authStauts$.subscribe(x => {
      //   console.log(x);
      // });

    }
  }
