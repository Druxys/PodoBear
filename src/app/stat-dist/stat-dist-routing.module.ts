import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatDistPage } from './stat-dist.page';

const routes: Routes = [
  {
    path: '',
    component: StatDistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatDistPageRoutingModule {}
