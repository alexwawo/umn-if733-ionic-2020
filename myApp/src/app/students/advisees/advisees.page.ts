import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {TestModalComponent} from '../../components/test-modal/test-modal.component';

@Component({
  selector: 'app-advisees',
  templateUrl: './advisees.page.html',
  styleUrls: ['./advisees.page.scss'],
})
export class AdviseesPage implements OnInit {

  constructor(
      private menuCtrl: MenuController,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.toggle('studentsMenu');
  }

  async openTestModal() {
    const modal = await this.modalCtrl.create({
      component: TestModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
