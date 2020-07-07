import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ChooseChallengerComponent } from './components/choose-challenger/choose-challenger.component';
import { PronoComponent } from './components/prono/prono.component';
import { DaysComponent } from './components/days/days.component';
import { VoteComponent } from './components/vote/vote.component';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../../firebaseConfig.js'
import { AngularFirestore } from '@angular/fire/firestore';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChooseChallengerComponent,
    PronoComponent,
    DaysComponent,
    VoteComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
