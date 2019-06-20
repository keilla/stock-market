import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/core/models';

@Component({
  selector: 'app-stock-recommender',
  templateUrl: './stock-recommender.component.html',
  styleUrls: ['./stock-recommender.component.scss']
})
export class StockRecommenderComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {
  }

}
