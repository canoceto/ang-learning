import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HmeComponent} from './home/home.component';
import {LogInComponent} from './log-in/log-in.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HmeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
