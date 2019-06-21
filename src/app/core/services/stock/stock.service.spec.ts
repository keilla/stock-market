import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';
import { Stock, StockRecommendation } from '../../models';
import { of } from 'rxjs';

describe('StockService', () => {

  let service: StockService;

  beforeEach(() => service = TestBed.get(StockService));

  it('should return stock list', (done) => {
    const date1 = new Date(2019, 6, 18);
    const date2 = new Date(2019, 6, 19);
    const date3 = new Date(2019, 6, 20);

    spyOn(service, 'getPrice').and.returnValue(10);
    spyOn(service, 'getDates').and.returnValue([date1, date2, date3]);
    spyOn(service, 'getSocialMediasCounts').and.returnValue([{ socialMedia: 'twitter', count: 15 }]);

    service.getStotck('banana', new Date(), new Date()).subscribe(stock => {
      expect(stock).toEqual(
        new Stock('banana', [
          new StockRecommendation(date1, 10, [{ socialMedia: 'twitter', count: 15 }]),
          new StockRecommendation(date2, 10, [{ socialMedia: 'twitter', count: 15 }]),
          new StockRecommendation(date3, 10, [{ socialMedia: 'twitter', count: 15 }])
        ]));
      done();
    });
  });

  it('should return dates', () => {
    const date1 = new Date(2019, 6, 18);
    const date2 = new Date(2019, 6, 19);
    const date3 = new Date(2019, 6, 20);
    expect(service.getDates(date1, date3).length).toBe(3);
    expect(service.getDates(date1, date3)).toEqual([date1, date2, date3]);
  });

});
