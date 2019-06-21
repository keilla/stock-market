import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock, StockRecommendation } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  socialMedias = ['twitter', 'facebook'];

  constructor() { }

  getStotck(symbol: string, beginDate: Date, endDate: Date): Observable<Stock> {
    const stockRecommendations = this.getDates(beginDate, endDate).map(date => {
      return new StockRecommendation(
        date,
        this.getPrice(),
        this.getSocialMediasCounts()
      );
    });
    return of(new Stock(symbol, stockRecommendations));
  }

  getPrice(): number {
    return Math.random() * 100;
  }

  getDates(beginDate: Date, endDate: Date): Date[] {
    const dates = new Array<Date>();
    const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    for (let days = 0; days <= diffDays; days++) {
      const date = new Date(beginDate);
      date.setDate(date.getDate() + days);
      dates.push(date);
    }
    return dates;
  }

  getSocialMediaCount(): number {
    return Math.trunc(Math.random() * 100);
  }

  getSocialMediasCounts(): { socialMedia: string, count: number }[] {
    return this.socialMedias.map(socialMedia => {
      return { socialMedia, count: this.getSocialMediaCount() };
    });
  }
}
