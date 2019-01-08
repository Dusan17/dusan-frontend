import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule'},
    { path: 'about', loadChildren: './about/about.module#AboutModule'},
    { path: 'work', loadChildren: './work/work.module#WorkModule'},
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
