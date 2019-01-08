import {NgModule} from '@angular/core';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class SharedModule {
}
