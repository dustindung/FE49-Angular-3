import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseList: any[] = [];

  @Output() courseListEmitter = new EventEmitter();

  constructor() { }

  setCourseList(val: any[]) {
    this.courseList = val;
    this.courseListEmitter.emit(this.courseList);
    console.log('set course list success', this.courseList);
  }
}
