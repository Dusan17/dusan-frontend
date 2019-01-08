import {NgModule} from '@angular/core';
import { WorkComponent } from './containers/work/work.component';
import { RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {path: '', component: WorkComponent}
]

@NgModule({
    declarations: [WorkComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class WorkModule {
}
