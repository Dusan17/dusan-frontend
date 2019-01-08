import {NgModule} from '@angular/core';
import { ContactComponent } from './containers/contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

@NgModule({
    declarations: [ContactComponent, ContactInfoComponent],
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [RouterModule]
})
export class ContactModule {
}
