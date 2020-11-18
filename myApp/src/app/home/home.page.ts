import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title = 'Hello UMN';
  salam = 'HI Guys, welcome to UMN the most prestigious university in Indonesia';
  constructor() { }

  ngOnInit() {
  }

}
