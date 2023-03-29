import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { FirstChildAComponent } from './first-child-a.component';
import { SecondChildAComponent } from './second-child-a/second-child-a.component';
import { FirstChildBComponent } from './first-child-b.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstChildAComponent,
    SecondChildAComponent,
    FirstChildBComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
