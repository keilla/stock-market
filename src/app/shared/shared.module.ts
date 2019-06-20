import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
