import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenPage } from './template-driven.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenPageRoutingModule {}
