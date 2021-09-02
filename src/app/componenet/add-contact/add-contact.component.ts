import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/les modeles/Contact';
import { ContactService } from 'src/app/services/contact.service';




@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  statusContact:boolean=false
  
  contact:Contact= {
    name:"",
    tele:0
  }
  constructor( private contactservice :ContactService) { 

  }


  ngOnInit() {
  }
  newContact(){

    this.contactservice.addContact(this.contact)
    this.contact.name="";
    this.contact.tele =0
    this.statusContact=false
  }
  }


  


