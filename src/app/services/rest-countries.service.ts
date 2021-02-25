import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {
  constructor(private http: HttpClient) { }

  getQuery = (query: string) => {
    const url = `https://restcountries.eu/rest/v2/${query}`;
    console.log(url);
    return this.http.get(url);
  }

  getAll = () => {
    return this.getQuery('all');
  }

  getForRegion = (region: string) => {
    return this.getQuery(`region/${region}`);
  }

  getCountry = (pais: string) => {
    return this.getQuery(`alpha/${pais}`);
  }

}
