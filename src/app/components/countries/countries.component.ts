import { Component } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  page: number;
  pageSize: number;
  paises: any;
  loading = true;

  constructor(private restCountriesService: RestCountriesService) {
    this.page = 1;
    this.pageSize = 10;
    this.getAll();
  }

  getAll = () => {
    this.restCountriesService.getAll().subscribe(paises => {
      this.paises = paises;
      this.loading = false;
    });
  }

}
