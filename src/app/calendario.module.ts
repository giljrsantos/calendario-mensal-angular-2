import { BrowserModule } from '@angular/platform-browser';
import { CalendarioComponent } from './calendario.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    CalendarioComponent
  ],
  providers: [],
  bootstrap: [CalendarioComponent]
})
export class CalendarioModule { }
