import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent, ButtonComponent} from './components';
import { AlertDirective } from './directives';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    AlertDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ButtonComponent,
    AlertDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
