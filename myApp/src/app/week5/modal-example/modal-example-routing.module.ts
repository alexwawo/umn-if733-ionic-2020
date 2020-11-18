import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalExamplePage } from './modal-example.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalExamplePageRoutingModule {}
