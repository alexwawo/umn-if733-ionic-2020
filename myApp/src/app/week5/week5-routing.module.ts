import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Week5Page } from './week5.page';

const routes: Routes = [
  {
    path: '',
    component: Week5Page
  },
  {
    path: 'modal-example',
    loadChildren: () => import('./modal-example/modal-example.module').then( m => m.ModalExamplePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Week5PageRoutingModule {}
