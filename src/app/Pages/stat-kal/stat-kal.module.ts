import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatKalPageRoutingModule } from './stat-kal-routing.module';

import { StatKalPage } from './stat-kal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatKalPageRoutingModule
  ],
  declarations: [StatKalPage]
})
export class StatKalPageModule {}
