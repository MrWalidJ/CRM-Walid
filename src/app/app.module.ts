import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerinfoComponent } from './components/edit-customerinfo/edit-customerinfo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CustDetailsComponent } from './components/cust-details/cust-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactFilterPipe } from './pipes/contact-filter.pipe';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerinfoComponent,
    LoginComponent,
    RegisterComponent,
    ShowCustomersComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FilterPipe,
    CustDetailsComponent,
    ContactsComponent,
    ContactFilterPipe,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
