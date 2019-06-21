import { StockRecommendation } from './stock-recommendation';

export class Stock {
  symbol: string;
  recommendations: StockRecommendation[];

  constructor(symbol: string, reccommendations: StockRecommendation[]) {
    this.symbol = symbol;
    this.recommendations = reccommendations;
    this.recommendations.map(recommendation =>
      recommendation.setRecommendation(this.priceAverage, this.socialMediasCountsAverage));
  }

  get priceAverage() {
    return 0;
  }

  get socialMediasCountsAverage(): number {
    return 0;
  }
}
