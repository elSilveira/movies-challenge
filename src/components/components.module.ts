import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { RoundedRatingComponent } from './rounded-rating/RoundedRatingComponent';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    MoviesComponent,
    SearchComponent,
    WatchlistComponent,
    MovieCardComponent,
    RoundedRatingComponent,
    LoaderComponent,
    MovieDetailsComponent,
  ],
  exports: [
    MoviesComponent,
    SearchComponent,
    WatchlistComponent,
    LoaderComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
