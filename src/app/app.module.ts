import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaginadaComponent } from './components/shared/tabla-paginada/tabla-paginada.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CountryComponent } from './components/country/country.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FindComponent } from './components/find/find.component';
import { SearchComponent } from './components/shared/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TablaPaginadaComponent,
    RegionsComponent,
    CountryComponent,
    LoadingComponent,
    CountriesComponent,
    SearchComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
