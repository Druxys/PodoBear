import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'browse',
    loadChildren: () => import('./browse/browse.module').then( m => m.BrowsePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'stat-step',
    loadChildren: () => import('./stat-step/stat-step.module').then( m => m.StatStepPageModule)
  },
  {
    path: 'stat-dist',
    loadChildren: () => import('./stat-dist/stat-dist.module').then( m => m.StatDistPageModule)
  },
  {
    path: 'stat-kal',
    loadChildren: () => import('./stat-kal/stat-kal.module').then( m => m.StatKalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
