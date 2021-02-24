import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CountryComponent } from './components/country/country.component';

export const ROUTES: Routes = [
    { path: 'paises', component: HomeComponent },
    { path: 'regiones/:nombre', component: RegionsComponent },
    { path: 'paises/:nombre', component: CountryComponent },
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
