import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/interfaces/movie-interface';
import { WatchlistService } from 'src/services/watchlist.service';
import { Helper } from 'src/shared/helper';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  constructor(private helper: Helper, private watchlistService: WatchlistService, private router: Router) { }
  @Input()
  movie?: Movie = undefined;
  @Input('details')
  details = false;
  
  safeUrl(url: string) {
    return this.helper.safeUrl(url.replaceAll("watch?v=", "embed/"))
  }

  onList(title: string) {
    return this.watchlistService.exists(title)
  }

  updateWatchlist(title: string) {
    if (this.watchlistService.exists(title))
      this.watchlistService.remove(title)
    else
      this.watchlistService.insert(title)
  }

  navigateTo(page: string, title: string) {
    this.router.navigate([page], { queryParams: { title } })
  }
}
