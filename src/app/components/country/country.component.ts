import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  loading = true;
  code: string;
  pais: any;
  constructor(private router: ActivatedRoute, private restCountriesService: RestCountriesService) {
    this.router.params.subscribe(params => {
      this.getCountry(params.nombre);
    });
  }

  getCountry = (nombre: string) => {
    this.restCountriesService.getCountry(nombre).subscribe(pais => {
      this.pais = pais;
      this.loading = false;
    });
  }

}
