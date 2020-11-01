import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, CourseListComponent, CourseItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
