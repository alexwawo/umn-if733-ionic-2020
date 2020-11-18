import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateDrivenPageRoutingModule } from './template-driven-routing.module';

import { TemplateDrivenPage } from './template-driven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateDrivenPageRoutingModule
  ],
  declarations: [TemplateDrivenPage]
})
export class TemplateDrivenPageModule {}
