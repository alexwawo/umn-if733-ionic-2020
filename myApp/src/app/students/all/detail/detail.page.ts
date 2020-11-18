import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
      private router: Router,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/students/tabs/all');
    // this.navCtrl.navigateBack('/students/tabs/all');
    // this.navCtrl.pop();
  }

}
