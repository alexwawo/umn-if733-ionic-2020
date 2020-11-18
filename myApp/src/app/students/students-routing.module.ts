import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsPage } from './students.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/students/tabs/all',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: StudentsPage,
    children: [
      {
        path: 'all',
        loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
      },
      {
        path: 'advisees',
        loadChildren: () => import('./advisees/advisees.module').then( m => m.AdviseesPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
