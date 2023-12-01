import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private _watchlist = new Set('');

  constructor() {
    this.loadWatchlist();
  }

  // Public observable to access movies
  exists(movie: string): boolean {
    return this._watchlist.has(movie)
  }

  remove(movie: string): void {
    this._watchlist.delete(movie);
    localStorage.setItem('watchlist', Array.from(this._watchlist).join(','));
  }

  insert(movie: string): void {
    this._watchlist.add(movie);
    localStorage.setItem('watchlist', Array.from(this._watchlist).join(','));
  }

  private loadWatchlist() {
    let res: any = localStorage.getItem('watchlist')
    if (res) {
      res = res?.split(',');
      res.forEach((title: string) => this._watchlist.add(title))
    }
  }
}
