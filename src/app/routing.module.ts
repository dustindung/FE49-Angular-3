import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailIndexComponent } from './detail/detail-index/detail-index.component';
import { SignInIndexComponent } from './sign-in/sign-in-index/sign-in-index.component';
import { SignUpIndexComponent } from './sign-up/sign-up-index/sign-up-index.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "detail/:id", component: DetailIndexComponent },
  { path: "signin", component: SignInIndexComponent },
  { path: "signup", component: SignUpIndexComponent },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class RoutingModule { }
