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
    path: 'display-map',
    loadChildren: () => import('./display-map/display-map.module').then( m => m.DisplayMapPageModule)
  },
  {
    path: 'current-loc',
    loadChildren: () => import('./current-loc/current-loc.module').then( m => m.CurrentLocPageModule)
  },
  {
    path: 'loc-coordinate',
    loadChildren: () => import('./loc-coordinate/loc-coordinate.module').then( m => m.LocCoordinatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
