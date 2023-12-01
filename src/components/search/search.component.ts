import { Component } from '@angular/core';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private searchService: SearchService) {
    searchService.setSearchTerm(this._searchTerm)
  }

  get sortOrder$(){
    return this.searchService.sortOrder$
  }
    
  get sortType$(){
    return this.searchService.sortType$
  }

  changeOrder() {
    this.searchService.changeOrder()
  }

  sortBy(type: string) {
    this.searchService.setSortBy(type)
  }
  
  _searchTerm: string = '';
  set searchTerm(event: string) {
    this._searchTerm = event;
    this.searchService.setSearchTerm(event)
  }
  get searchTerm(): string {
    return this._searchTerm
  }
}
