import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-rounded-rating',
  templateUrl: './rounded-rating.component.html',
  styleUrls: ['./rounded-rating.component.scss']
})
export class RoundedRatingComponent {

  @Input()
  rating: any = '0';

  get progressRating() {
    var ts:any = this.rating as number;
    ts = ts.toPrecision(1)
    
    return 'progress-' + (ts as number * 10)
  }
}
