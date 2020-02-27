import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatStepPage } from './stat-step.page';

const routes: Routes = [
  {
    path: '',
    component: StatStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatStepPageRoutingModule {}
