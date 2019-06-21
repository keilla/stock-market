import { StockRecommendation } from '../stock-recommendation/stock-recommendation';

export class Stock {
  symbol: string;
  recommendations: StockRecommendation[];

  constructor(symbol: string, reccommendations: StockRecommendation[]) {
    this.symbol = symbol;
    this.recommendations = reccommendations;

    const priceAverage = this.priceAverage;
    const socialMediasCountsAverage = this.socialMediasCountsAverage;
    this.recommendations.map(recommendation =>
      recommendation.setRecommendation(priceAverage, socialMediasCountsAverage));
  }

  get priceAverage() {
    const priceSum = this.recommendations.reduce((a, b) => {
      return (a + b.price);
    }, 0);
    return priceSum / this.recommendations.length;
  }

  get socialMediasCountsAverage(): number {
    let socialMediaFlat = [];
    this.recommendations.map(recommendation =>
      recommendation.socialMediasCounts.map(socialMediaCount =>
        socialMediaFlat = [...socialMediaFlat, socialMediaCount])
    );

    const socialMediaSum =  socialMediaFlat.reduce((a, b) => {
      return (a + b.count);
    }, 0);

    return Math.trunc(socialMediaSum / socialMediaFlat.length);
  }

}
