import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockRoutingModule } from './stock.routing.modules';

@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockRoutingModule
  ]
})
export class StockModule { }
