import { Recommendation } from '../recommendation.enum';

export class StockRecommendation {
  date: Date;
  price: number;
  socialMediasCounts: { socialMedia: string, count: number }[];
  status: Recommendation;

  constructor(
    date: Date,
    price: number,
    socialMediasCounts: { socialMedia: string, count: number }[],
  ) {
    this.date = date;
    this.price = price;
    this.socialMediasCounts = socialMediasCounts;
  }

  setRecommendation(priceAverage: number, socialMediaAverage: number) {
    if (this.price < priceAverage) {
      if (this.socialMediaCount > socialMediaAverage) {
        this.status = Recommendation.buy;
      } else {
        this.status = Recommendation.holding;
      }
    } else if (this.price >= priceAverage) {
      if (this.socialMediaCount > socialMediaAverage) {
        this.status = Recommendation.sell;
      } else {
        this.status = Recommendation.holding;
      }
    }
  }

  get socialMediaCount() {
    return 0;
  }
}
