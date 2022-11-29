import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AttiviComponent } from './components/attivi/attivi.component';
import { InattiviComponent } from './components/inattivi/inattivi.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"",
    component: AttiviComponent
  },
  {
    path:"",
    component: InattiviComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AttiviComponent,
    InattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
