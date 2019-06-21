export class Stock {
  symbol: string;
  datePrices: { price: number, date: Date }[];

  constructor(symbol: string, datePrices: { price: number, date: Date }[]) {
    this.symbol = symbol;
    this.datePrices = datePrices;
  }
}
