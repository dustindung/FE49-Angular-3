import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: ICourse[];

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this.courseList = this._courseService.courseList;

    this._courseService.courseListEmitter.subscribe((val: ICourse[]) => {
      this.courseList = val;
    });
  }

}
