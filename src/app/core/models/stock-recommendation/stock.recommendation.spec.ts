import { StockRecommendation } from './stock-recommendation';
import { Recommendation } from '../recommendation.enum';

describe('StockRecommendation', () => {

  it('should return socialMediaCount', () => {
    const stockRecomendation = new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]);
    expect(stockRecomendation.socialMediaCount).toBe(13);
  });

  it('should recommend to buy', () => {
    const stockRecomendationBuy = new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]);
    stockRecomendationBuy.setRecommendation(12, 6);
    expect(stockRecomendationBuy.status).toBe(Recommendation.buy);
  });

  it('should recommend to buy', () => {
    const stockRecomendationHolding = new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]);
    stockRecomendationHolding.setRecommendation(12, 15);
    expect(stockRecomendationHolding.status).toBe(Recommendation.holding);
  });

  it('should recommend to sell', () => {
    const stockRecomendationHolding = new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]);
    stockRecomendationHolding.setRecommendation(5, 4);
    expect(stockRecomendationHolding.status).toBe(Recommendation.sell);
  });

  it('should recommend to holding', () => {
    const stockRecomendationHolding = new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]);
    stockRecomendationHolding.setRecommendation(5, 20);
    expect(stockRecomendationHolding.status).toBe(Recommendation.holding);
  });
});
