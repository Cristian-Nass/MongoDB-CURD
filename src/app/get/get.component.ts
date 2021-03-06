import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Companysmodel } from '../companysmodel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  getData: any;

  private url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe((response: string[]) => {
        console.log(response);
        this.getData = response;
      });

  }

}
