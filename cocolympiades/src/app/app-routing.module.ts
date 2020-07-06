import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PronoComponent } from './components/prono/prono.component';


const routes: Routes = [  { path: '', component: HomeComponent }, { path: 'prono', component: PronoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
