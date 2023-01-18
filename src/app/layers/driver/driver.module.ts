import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { MaterialModule } from 'src/app/share/material/material.module';



@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DriverComponent
  ]
})
export class DriverModule { }
