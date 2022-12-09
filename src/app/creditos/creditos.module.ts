import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditosComponent } from './creditos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditosComponent],
  exports: [CreditosComponent]
})
export class CreditosModule { }
