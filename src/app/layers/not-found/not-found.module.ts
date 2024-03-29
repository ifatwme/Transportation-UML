import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from 'src/app/share/shared/shared.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
