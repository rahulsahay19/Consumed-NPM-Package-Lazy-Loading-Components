import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoggingService, MoviesService } from 'sample-angular-movies-bundle/app';
import { MoviesComponent } from './movies/movies.component';
import { AnotherService } from './movies/another.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent }])
  ],
  providers: [LoggingService,AnotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
