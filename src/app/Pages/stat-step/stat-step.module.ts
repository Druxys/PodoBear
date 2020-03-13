import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StatStepPageRoutingModule} from './stat-step-routing.module';

import {StatStepPage} from './stat-step.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatStepPageRoutingModule
    ],
    declarations: [StatStepPage]
})
export class StatStepPageModule {
}
