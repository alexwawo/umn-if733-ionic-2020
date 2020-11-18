import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormPageRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormPage } from './reactive-form.page';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveFormPageRoutingModule
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
