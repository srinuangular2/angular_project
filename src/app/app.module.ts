import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';


import { CountriesService } from './AllService/countries.service';
import { CountryComponent } from './country/country.component';

import { ListofService } from './myServices/listof.service';
import { ListCntryComponent } from './list-cntry/list-cntry.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',component: AboutComponent },
  {path: 'services', component: ServicesComponent,},
  { path: 'contact',      component: ContactComponent },
  { path: 'countries',      component: CountryComponent },
  { path: 'listcontry',      component: ListCntryComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    CountryComponent,
    ListCntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountriesService,ListofService],
  bootstrap: [AppComponent]
})
export class AppModule { }
