import {NgModule} from '@angular/core';
import { AboutComponent } from './containers/about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutContentComponent } from './components/about-content/about-content.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutServicesComponent } from './components/about-services/about-services.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent, AboutContentComponent, AboutServicesComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [RouterModule]
})
export class AboutModule {}
