import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.page.html',
  styleUrls: ['./creations.page.scss'],
})
export class CreationsPage implements OnInit {

  constructor(
      private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.toggle('m1');
  }

}
