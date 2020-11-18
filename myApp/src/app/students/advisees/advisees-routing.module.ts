import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdviseesPage } from './advisees.page';

const routes: Routes = [
  {
    path: '',
    component: AdviseesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviseesPageRoutingModule {}
