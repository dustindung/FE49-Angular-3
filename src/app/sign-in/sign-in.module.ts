import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInIndexComponent } from "./sign-in-index/sign-in-index.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [SignInIndexComponent],
  imports: [CommonModule, SharedModule, FormsModule, HttpClientModule],
  exports: [SignInIndexComponent],
})
export class SignInModule {}
