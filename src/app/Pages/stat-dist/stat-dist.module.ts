import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StatDistPageRoutingModule} from './stat-dist-routing.module';

import {StatDistPage} from './stat-dist.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatDistPageRoutingModule
    ],
    declarations: [StatDistPage]
})
export class StatDistPageModule {
}
