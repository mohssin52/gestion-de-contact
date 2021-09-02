import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from './../les modeles/Contact';




@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDoc:AngularFirestoreDocument<Contact> | undefined 
  contactCollection:AngularFirestoreCollection<Contact> 
 contact: Observable<Contact[]> 

  constructor(private afs:AngularFirestore) {
    this.contactCollection = this.afs.collection('contact');
 
    this.contact =  this.contactCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
        
      }))
    );

   }
   getContact(){
     return this.contact
   }
   addContact(contac:Contact){
     this.contactCollection.add(contac)
         
   }
  updateContact(contact:Contact){
   this.contactDoc= this.contactCollection.doc<Contact>(contact.id)
     this.contactDoc.update(contact)
  }
  deleteContact(contact:Contact){
    this.contactDoc= this.contactCollection.doc<Contact>(contact.id)
    this.contactDoc.delete()
  }
}
