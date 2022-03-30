import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrograssBarComponent } from './prograss-bar/prograss-bar.component';



@NgModule({
  declarations: [
    PrograssBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrograssBarComponent
  ]
})
export class SharedModule { }
