import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/core/services';
import { Stock } from 'src/app/core/models';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit, AfterViewInit {

  stockSearchForm: FormGroup;
  beginDate: Date;
  endDate: Date;
  days = 10;
  stock: Stock

  @ViewChild('input',  {static: false}) input: ElementRef;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
  ) { }

  ngOnInit() {
    this.beginDate = new Date();
    this.beginDate.setDate(this.beginDate.getDate() - this.days);
    this.endDate = new Date();

    this.stockSearchForm = this.fb.group({
      stockSymbol: ['', Validators.required],
      beginDate: [this.beginDate],
      endDate: [this.endDate]
    });

  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  searchStock() {
    if (this.stockSearchForm.valid) {
      this.stockService.getStotck(this.stockSearchForm.get('stockSymbol').value)
      .subscribe(stock => this.stock = stock);
    }
  }

}
