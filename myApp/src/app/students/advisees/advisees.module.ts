import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdviseesPageRoutingModule } from './advisees-routing.module';

import { AdviseesPage } from './advisees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviseesPageRoutingModule
  ],
  declarations: [AdviseesPage]
})
export class AdviseesPageModule {}
