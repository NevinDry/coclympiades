import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PronoComponent } from './components/prono/prono.component';
import { VoteComponent } from './components/vote/vote.component';


const routes: Routes = [  { path: '', component: HomeComponent }, { path: 'prono', component: PronoComponent },  { path: 'vote', component: VoteComponent }, { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
