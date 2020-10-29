import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpIndexComponent } from './sign-up-index/sign-up-index.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SignUpIndexComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SignUpIndexComponent,
  ]
})
export class SignUpModule { }
