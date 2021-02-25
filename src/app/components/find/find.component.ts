import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: [
  ]
})
export class FindComponent {
  page: number;
  pageSize: number;
  countries: any[];
  loading = true;
  isValid: boolean;
  term: string;

  constructor(private router: ActivatedRoute, private restCountriesService: RestCountriesService) {
    this.page = 1;
    this.pageSize = 10;
    this.router.params.subscribe(params => {
      this.countries = [];
      this.isValid = this.validar(params.term);
      this.term = params.term;
      this.searchCountries(params.term);
    });
  }

  searchCountries = (term: string) => {
    this.restCountriesService.getAll().subscribe((data: any) => {
      for (const item of data) {
        if (item.name.toLowerCase().includes(term)) {
          console.log(item.name.toLowerCase());
          this.countries.push(item);
        }
      }
      if (this.countries.length === 0) {
        this.isValid = false;
      }
      this.loading = false;
    });
  }

  validar = (term: string) => {
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if (!term) {
      return false;
    } else {
      if (!pattern.test(term)) {
        return false;
      } else {
          return true;
      }
    }
  }

}
