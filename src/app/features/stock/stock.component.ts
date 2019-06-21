import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/core/services';
import { Stock } from 'src/app/core/models';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit, AfterViewInit, OnDestroy {

  stockSearchForm: FormGroup;
  beginDate: Date;
  endDate: Date;
  stock: Stock;
  socialMedias: string[];
  unsub$ = new Subject();

  @ViewChild('input',  {static: false}) input: ElementRef;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
  ) { }

  ngOnInit() {
    this.stockSearchForm = this.fb.group({
      stockSymbol: ['', Validators.required],
      days: [10, Validators.required],
    });

    this.setTimeWindow(10);
    this.stockSearchForm.get('days').valueChanges
    .pipe(
      filter(value => !isNaN(+value))
    )
    .subscribe(days =>
      this.setTimeWindow(days)
    );
  }

  setTimeWindow(days: number) {
    this.beginDate = new Date();
    this.beginDate.setDate(this.beginDate.getDate() - (days - 1));
    this.endDate = new Date();
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  searchStock() {
    if (this.stockSearchForm.valid) {
      this.stockService.getStotck(
        this.stockSearchForm.get('stockSymbol').value,
        this.beginDate,
        this.endDate
      ).
      pipe(takeUntil(this.unsub$))
      .subscribe(stock => this.stock = stock);

      this.socialMedias = this.stockService.socialMedias;
    }
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
