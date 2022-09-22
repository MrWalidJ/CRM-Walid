import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [] ;
  contName: string ='';

  constructor(private cos: ContactsService) {
    this.contacts = this.cos.getAll();
  }

  ngOnInit(): void {}
  formatDate(d: Date): string {
    const yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let x = dd.toString();
    let y = mm.toString();
    if (dd < 10) x = '0' + x;
    if (mm < 10) y = '0' + y;
    return x + '/' + y + '/' + yyyy;
  }

  
    }
  

