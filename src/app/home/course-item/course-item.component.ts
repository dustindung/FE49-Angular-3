import { Component, Input, OnInit } from "@angular/core";
import { ICourse } from "src/app/model/course";

@Component({
  selector: "app-course-item",
  templateUrl: "./course-item.component.html",
  styleUrls: ["./course-item.component.scss"],
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;

  constructor() {}

  ngOnInit(): void {}
}
