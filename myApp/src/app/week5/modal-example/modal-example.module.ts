import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalExamplePageRoutingModule } from './modal-example-routing.module';

import { ModalExamplePage } from './modal-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExamplePageRoutingModule
  ],
  declarations: [ModalExamplePage]
})
export class ModalExamplePageModule {}
