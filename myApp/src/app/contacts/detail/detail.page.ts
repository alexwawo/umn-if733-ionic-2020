import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  contact: Contact;
  constructor(
      private contactsService: ContactsService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contactId')) { return; }
      const contactId = paramMap.get('contactId');
      this.contact = this.contactsService.getContact(contactId);
    });
  }

  deleteContact() {
    this.contactsService.deleteContact(this.contact.id);
    this.router.navigate(['/contacts']);
    this.presentToast();
  }

  async deleteAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Kontak',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteContact()
        }
      ]
    });

    alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Kontak dihapus',
      color: 'warning',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
