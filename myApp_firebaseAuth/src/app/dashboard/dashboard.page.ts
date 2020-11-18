import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;
  userID: string;

  constructor(
      private navCtrl: NavController,
      private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res => {
      if (res === null) {
        this.navCtrl.navigateBack('/login');
      }
      console.log('res:', res);
      console.log('uid: ', res.uid);
      if (res !== null) {
        this.userEmail = res.email;
        this.userID = res.uid;
      } else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log(err);
    });
  }

  logout() {
    this.authSrv.logoutUser()
        .then(res => {
          console.log(res);
          this.navCtrl.navigateBack('/login');
        })
        .catch(error => {
          console.log(error);
        });
  }

}
