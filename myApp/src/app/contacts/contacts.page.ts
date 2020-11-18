import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';
import {ContactsService} from './contacts.service';
import {ModalSample1Component} from '../recipes/components/modal-sample1/modal-sample1.component';
import {IonItemSliding, ModalController} from '@ionic/angular';
import {ModalNewContactComponent} from './components/modal-new-contact/modal-new-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  constructor(
      private contactsService: ContactsService,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getAllContacts();
    console.log(this.contacts);
    console.log('INI ADALAH PESAN DARI CONSOLE LOG');
  }

  ionViewWillEnter() {

  }

  async presentModal() {
    console.log('test modal');
    const modal = await this.modalCtrl.create({
      component: ModalNewContactComponent,
      componentProps: {}
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });

    return await modal.present();
  }

  onFilterUpdate(event: CustomEvent) {
    console.log(event.detail);
    if (event.detail.value === 'all') {
      console.log('Showing all contacts.');
    }else {
      console.log('Showing priority contacts.');
    }
  }

  setPriority(contact: Contact, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(contact.name, 'is set as priority contact');
  }

}
