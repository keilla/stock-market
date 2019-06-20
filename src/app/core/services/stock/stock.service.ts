import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStotck(symbol: string): Observable<Stock> {
    return of(new Stock(symbol, this.getPrice()));
  }

  getPrice() {
    return Math.random();
  }
}
