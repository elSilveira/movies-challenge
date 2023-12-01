import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/interfaces/movie-interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  constructor(private router: Router) { }

  @Input()
  movie: Movie | undefined;
  open$ = new BehaviorSubject<boolean>(true);
  toggleOpen() {
    this.open$.next(!this.open$.value);
  }

  navigateTo(page: string) {
    this.router.navigate([page])
  }
}
