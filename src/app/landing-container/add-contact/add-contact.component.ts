import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
model: any= {};
firstName;
lastName;
telephoneNumber;
address;
contacts;
  constructor() { }

  ngOnInit() {
  }
  AddContact() {
    this.contacts = {
    "firstName": this.model.firstname, 
"lastName": this.model.lastname,
"telephoneNumber":this.model.telephonenumber,
"address":this.model.address
    }
    console.log(this.contacts);
    
  }

}
