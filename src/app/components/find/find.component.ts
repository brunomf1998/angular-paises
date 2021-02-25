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
  countries: any[];
  constructor(private router: ActivatedRoute, private restCountriesService: RestCountriesService) {
    this.router.params.subscribe(params => {
      this.countries = [];
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
    });
  }

}
