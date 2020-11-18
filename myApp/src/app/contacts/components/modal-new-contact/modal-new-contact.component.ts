import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-modal-new-contact',
  templateUrl: './modal-new-contact.component.html',
  styleUrls: ['./modal-new-contact.component.scss'],
})
export class ModalNewContactComponent implements OnInit {

  constructor(
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  addContact() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'added to favorite'}, 'confirm');
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'New contact added.',
      color: 'success',
      duration: 5000
    });

    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding contact...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
