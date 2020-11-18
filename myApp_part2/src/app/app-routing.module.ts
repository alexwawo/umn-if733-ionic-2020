import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'template-driven',
    loadChildren: () => import('./forms/template-driven/template-driven.module').then( m => m.TemplateDrivenPageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./forms/reactive-form/reactive-form.module').then( m => m.ReactiveFormPageModule)
  },
  {
    path: 'students1',
    loadChildren: () => import('./week8/students1/students1.module').then( m => m.Students1PageModule)
  },
  {
    path: 'students2',
    loadChildren: () => import('./week8/students2/students2.module').then( m => m.Students2PageModule)
  },
  {
    path: 'students3',
    loadChildren: () => import('./week8/students3/students3.module').then( m => m.Students3PageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./week9/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'insert',
    loadChildren: () => import('./week9/insert/insert.module').then( m => m.InsertPageModule)
  },
  {
    path: 'week10/index',
    loadChildren: () => import('./week10/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'week10/create',
    loadChildren: () => import('./week10/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'week10/edit/:key',
    loadChildren: () => import('./week10/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit/:nim',
    loadChildren: () => import('./week9/edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
