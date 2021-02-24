import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {
  page: number;
  pageSize: number;
  paises: any;
  constructor(private router: ActivatedRoute, private restCountriesService: RestCountriesService) {
    this.page = 1;
    this.pageSize = 10;
    this.router.params.subscribe(params => {
      this.getForRegion(params.nombre);
    });
  }

  getForRegion = (region: string) => {
    this.restCountriesService.getForRegion(region).subscribe(paisesAfrica => {
      this.paises = paisesAfrica;
    });
  }

}
