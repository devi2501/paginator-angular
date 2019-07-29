import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suitability: any[];  
  public filteredUser: any;
  pageNo :number=1;
  userForm : FormGroup;
  
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.userForm = new FormGroup(
      {
        contactNo: new FormControl(null,[Validators.required]),
        requestID: new FormControl(null,[Validators.required]),
        ownerName: new FormControl(null,[Validators.required]),
        ownerSSN: new FormControl(null,[Validators.required]),
        annitantName: new FormControl(null,[Validators.required]),
        annitantSSN: new FormControl(null,[Validators.required]),
        producerName: new FormControl(null,[Validators.required]),
        producerSSN: new FormControl(null,[Validators.required]),
        producerFirm: new FormControl(null,[Validators.required])
      
      }
    );
    // Make the HTTP request:
    this.http.get('http://localhost:3004/users').subscribe((data : any[]) => {
    this.suitability = data;  
    console.log( this.suitability)
    
    });
 
}
onClickSubmit() {
  const users = new User(
    this.userForm.value.contactNo,
    this.userForm.value.requestID,
    this.userForm.value.ownerName,
    this.userForm.value.ownerSSN,
    this.userForm.value.annuitantName,
    this.userForm.value.annuitantSSN,
    this.userForm.value.producerName,
    this.userForm.value.producerSSN,
    this.userForm.value.producerFirm
);
}

}
