import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockRecommenderComponent } from './stock-recommender/stock-recommender.component';
import { StockService } from 'src/app/core/services';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockComponent,
        StockRecommenderComponent
      ],
      imports: [
        SharedModule
      ],
      providers: [
        StockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
