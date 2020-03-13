import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StatKalPage} from './stat-kal.page';

const routes: Routes = [
    {
        path: '',
        component: StatKalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StatKalPageRoutingModule {
}
