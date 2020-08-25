import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';
import { Companysmodel } from '../companysmodel';
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  private url = 'http://localhost:3000/posts';

  getData: any;

  constructor(private http: HttpClient) { }


  onCreatePost(postData: Companysmodel) {
    this.http.post(this.url, postData).subscribe();
  }


  // ngOnInit() {
  //   this.http.get(this.url)
  //   .subscribe(response => {
  //     console.log(response);
  //     this.getData = response;
  //   });

  // }

}
