import {NgModule} from '@angular/core';
import {HomeComponent} from './containers/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CoreModule} from '../core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        HomeRoutingModule,
        CoreModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        HomeComponent,
        AboutUsComponent
    ]
})
export class HomeModule {

}
