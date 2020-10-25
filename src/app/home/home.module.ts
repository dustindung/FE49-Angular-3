import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, CourseListComponent, CourseItemComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
