import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    // this.authService.login();
    // this.router.navigateByUrl('/places/tabs/discover');
    console.log('onLogin');
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit');
    console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
  }

}
