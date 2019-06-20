import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';
import { Stock } from '../../models';
import { of } from 'rxjs';

describe('StockService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return stock list', (done) => {
    const service: StockService = TestBed.get(StockService);
    spyOn(service, 'getPrice').and.returnValue(10);
    service.getStotck('banana').subscribe(stock => {
      expect(stock).toEqual(new Stock('banana', 10));
      done();
    });
  });

});
