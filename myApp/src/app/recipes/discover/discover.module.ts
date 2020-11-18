import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import {Sample2Component} from '../components/sample2/sample2.component';
import {Sample3Component} from '../components/sample3/sample3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule
  ],
    declarations: [DiscoverPage, Sample2Component, Sample3Component]
})
export class DiscoverPageModule {}
