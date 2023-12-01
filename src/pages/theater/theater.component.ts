import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/interfaces/movie-interface';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent {
  movie: Movie | undefined = undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService,
    private cd: ChangeDetectorRef) {
    route.queryParams.pipe(take(1)).subscribe
      ((param: any) => {
        let myTitle = param.title;
        movieService.movies$.subscribe(
          (movies: any) => {
            this.movie = movies.filter((movie: Movie) => movie.title == myTitle)[0];
          }
        )
      });
  }

}
