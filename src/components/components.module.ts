import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { RoundedRatingComponent } from './rounded-rating/RoundedRatingComponent';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    MoviesComponent,
    SearchComponent,
    MovieCardComponent,
    RoundedRatingComponent,
    LoaderComponent,
    MovieDetailsComponent,
  ],
  exports: [
    MoviesComponent,
    SearchComponent,
    LoaderComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
