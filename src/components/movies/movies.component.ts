import { Component } from '@angular/core';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  constructor(private searchService: SearchService) {
  }

  get movies$() { return this.searchService.searchResults$ }

}
