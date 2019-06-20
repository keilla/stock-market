import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockRoutingModule } from './stock.routing.modules';
import { StockRecommenderComponent } from './stock-recommender/stock-recommender.component';

@NgModule({
  declarations: [
    StockComponent,
    StockRecommenderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockRoutingModule
  ]
})
export class StockModule { }
