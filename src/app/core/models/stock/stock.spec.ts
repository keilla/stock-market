import { Stock } from './stock';
import { StockRecommendation } from '../stock-recommendation/stock-recommendation';

describe('Stock', () => {

  const stock = new Stock('banana', [
    new StockRecommendation(new Date(), 10, [
      { socialMedia: 'twitter', count: 12 },
      { socialMedia: 'twitter', count: 15 }
    ]),
    new StockRecommendation(new Date(), 12, [
      { socialMedia: 'twitter', count: 20 },
      { socialMedia: 'twitter', count: 14 }
    ]),
    new StockRecommendation(new Date(), 20, [
      { socialMedia: 'twitter', count: 6 },
      { socialMedia: 'twitter', count: 8 }
    ])
  ]);

  it('should calc priceAverage', () => {
    expect(stock.priceAverage).toBe(14);
  });

  it('should calc socialMediasCountsAverage', () => {
    expect(stock.socialMediasCountsAverage).toBe(12);
  });

});
