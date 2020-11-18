import { Injectable } from '@angular/core';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'John Thor The Avenger',
      photo: 'https://independent.media.clients.ellingtoncms.com/img/photos/2018/09/10/john_doe_-_jim_herrington_t958.jpg?fef15e12b784e9bbb22bf3f2924819218cda3d1a',
      phone: ['081122334455', '081234567890'],
      email: ['john.thor@umn.ac.id', 'hello@johnthor.com']
    },
    {
      id: 'c2',
      name: 'John Wick',
      photo: 'https://uproxx.com/wp-content/uploads/2018/05/john-wick-31.jpg',
      phone: ['087812312300', '081512131415'],
      email: ['john.wick@umn.ac.id', 'john.wick@gmail.com']
    }
  ];

  constructor() { }

  getAllContacts(){
    return [...this.contacts];
  }

  getContact(contactId: string) {
    return {...this.contacts.find( contact => {
        return contact.id === contactId;
      })};
  }

  deleteContact(contactId: string) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId;
    });
  }
}
