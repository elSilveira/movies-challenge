import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Movie } from 'src/interfaces/movie-interface';
import { MovieService } from './movie.service'; // Update the path based on your actual file structure

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _sortOrder$ = new BehaviorSubject<string>('asc');
  private _sortType$ = new BehaviorSubject<string>('title');
  private _searchTerm$ = new BehaviorSubject<string>('');
  private _searchResults$ = new BehaviorSubject<Movie[]>([]);

  constructor(private movieService: MovieService) {
    this.setupSearch();
    this._searchTerm$.subscribe(ev => {
      this.setupSearch()
    })
  }

  get sortOrder$() {
    return this._sortOrder$.asObservable()
  }
  get sortType$() {
    return this._sortType$.asObservable()
  }

  // Public observable to access search results
  get searchResults$(): Observable<Movie[]> {
    return this._searchResults$.asObservable();
  }

  // Function to set the search term
  setSearchTerm(searchTerm: string): void {
    this._searchTerm$.next(searchTerm);
  }

  setSortBy(sort: string): void {
    this._sortType$.next(sort);
    this.setupSearch()
  }

  changeOrder(): void {
    let next = this._sortOrder$.getValue() == OrderBy.asc ? OrderBy.desc : OrderBy.asc;
    this._sortOrder$.next(next);
    this.setupSearch()
  }

  private setupSearch(): void {
    combineLatest([this.movieService.movies$, this._searchTerm$, this._sortType$, this._sortOrder$])
      .pipe(
        map(([allMovies, searchTerm, sortType, sortOrder]) => {
          let filteredMovies = allMovies;

          if (searchTerm.trim() !== '') {
            filteredMovies = filteredMovies.filter((movie) =>
              movie.releasedDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }

          if (sortType === 'date') {
            filteredMovies = filteredMovies.sort((a, b) => {
              if (sortOrder == 'asc')
                return a.releasedDate.localeCompare(b.releasedDate)
              return b.releasedDate.localeCompare(a.releasedDate)
            });
          } else if (sortType === 'title') {
            filteredMovies = filteredMovies.sort((a, b) => {
              if (sortOrder == 'asc')
                return a.title.localeCompare(b.title)
              return b.title.localeCompare(a.title)
            });
          }

          return filteredMovies;
        })
      )
      .subscribe((sortedAndFilteredMovies) => {
        this._searchResults$.next(sortedAndFilteredMovies);
      });
  }
}
export enum OrderBy {
  asc = 'asc',
  desc = 'desc'
}