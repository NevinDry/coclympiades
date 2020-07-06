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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChooseChallengerComponent,
    PronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
