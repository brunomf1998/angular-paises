import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number;
  pageSize: number;
  paises: any;

  constructor(private restCountriesService: RestCountriesService) {
    this.page = 1;
    this.pageSize = 10;
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll = () => {
    this.restCountriesService.getAll().subscribe(paises => {
      this.paises = paises;
    });
  }

}
