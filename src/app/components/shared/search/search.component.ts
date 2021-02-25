import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  constructor(private router: Router) { }

  search = (term: string) => {
    this.router.navigate(['/search', term]);
  }

}
