import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.page.html',
  styleUrls: ['./template-driven.page.scss'],
})
export class TemplateDrivenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid){
      console.log('Form Invalid, kok bisa di submit sih...');
      return;
    }
    console.log(form);

    const nama = form.value.nama;
    const email = form.value.email;
    const password = form.value.password;

    console.log(nama, email, password);
  }
}
