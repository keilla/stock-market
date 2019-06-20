import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stockSearchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.stockSearchForm = new FormGroup({
      stockSymbol: new FormControl(),
    });
  }

}
