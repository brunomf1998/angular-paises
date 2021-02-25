import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FindComponent } from './components/find/find.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'paises', component: CountriesComponent },
    { path: 'regiones/:nombre', component: RegionsComponent },
    { path: 'paises/:nombre', component: CountryComponent },
    { path: 'search/:term', component: FindComponent },
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
