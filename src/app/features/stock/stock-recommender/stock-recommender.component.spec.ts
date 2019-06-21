import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecommenderComponent } from './stock-recommender.component';
import { Stock } from 'src/app/core/models';

describe('StockRecommenderComponent', () => {
  let component: StockRecommenderComponent;
  let fixture: ComponentFixture<StockRecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockRecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecommenderComponent);
    component = fixture.componentInstance;
    component.stock = new Stock('banana', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
