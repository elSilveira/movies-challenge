import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/interfaces/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies$ = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) {
    this.loadMoviesData();
  }

  // Public observable to access movies
  get movies$(): Observable<Movie[]> {
    return this._movies$.asObservable();
  }

  private loadMoviesData() {
    const jsonFileUrl = './assets/movies-data.json';

    // Use HttpClient to get the JSON file
    this.http.get<Movie[]>(jsonFileUrl).pipe(
      map((data) => {
        // Transform data if needed
        return data;
      })
    ).subscribe(
      (movies) => {
        // Update the BehaviorSubject with the fetched movies
        this._movies$.next(movies);
      },
      (error) => {
      }
    );
  }
}
