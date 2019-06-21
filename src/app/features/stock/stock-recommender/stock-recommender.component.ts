import { Component, Input } from '@angular/core';
import { Stock, Recommendation } from 'src/app/core/models';

@Component({
  selector: 'app-stock-recommender',
  templateUrl: './stock-recommender.component.html',
  styleUrls: ['./stock-recommender.component.scss']
})
export class StockRecommenderComponent {

  @Input() stock: Stock;
  @Input() socialMedias: string[];

  constructor() { }

  getAlert(recomendationStatus: Recommendation): -1 | 0 | 1 {
    if (recomendationStatus === Recommendation.sell) {
      return 1;
    }
    if (recomendationStatus === Recommendation.buy) {
      return -1;
    }
    return 0;
  }

}
