import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact} from './../../les modeles/Contact';
@Component({
  selector: 'list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
contacts:any
statusContact=false
  myContact!: Contact; 
  constructor(private contactService:ContactService){
   
    
  }

  ngOnInit(): void {
    this.contactService.getContact()
    .subscribe(contact => {
       this.contacts= contact
      console.log(this.contacts)
    }
    )
  }
  updateContact(contact:Contact){
    this.contactService.updateContact(contact)
    this.statusContact =false

  }
  editContact(contact:Contact){
    this.myContact=contact
    this.statusContact =true
  }
  deleteContact(contact:Contact){
    this.contactService.deleteContact(contact)
  }
 
}
