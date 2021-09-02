import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore'
import { ContactService } from './services/contact.service';
import { ListContactComponent } from './componenet/list-contact/list-contact.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';
import { AddContactComponent } from './componenet/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [

    AppComponent,
    ListContactComponent,
    NavbarComponent,
    AddContactComponent
  ],
  imports: [
  
  BrowserModule,
  FormsModule,
  
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ,AngularFirestoreModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
