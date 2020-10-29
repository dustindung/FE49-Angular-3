import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInIndexComponent } from './sign-in-index/sign-in-index.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SignInIndexComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SignInIndexComponent],
})
export class SignInModule { }
