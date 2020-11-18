import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Week5PageRoutingModule } from './week5-routing.module';

import { Week5Page } from './week5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Week5PageRoutingModule
  ],
  declarations: [Week5Page]
})
export class Week5PageModule {}
