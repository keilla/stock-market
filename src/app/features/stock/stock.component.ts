import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stockSearchForm: FormGroup;
  beginDate: Date;
  endDate: Date;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.beginDate = new Date();
    this.beginDate.setDate(this.beginDate.getDate() - 10);
    this.endDate = new Date();

    this.stockSearchForm = this.fb.group({
      stockSymbol: [''],
      beginDate: [this.beginDate],
      endDate: [this.endDate]
    });
  }


}
