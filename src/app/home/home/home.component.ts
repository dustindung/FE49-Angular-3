import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpClient, private _courseSerivce: CourseService) { }

  maxSize = 5;
  totalItems = 0;
  CurrentPage = 1;
  pageSize = 3;

  ngOnInit(): void {
    this.fetchCourses();
  }

  // promise => pending, fulfill, reject
  // observable

  handleChangePage(event: any) {
    this.CurrentPage = event.page;
    this.fetchCourses();
  }

  fetchCourses() {
    this._http.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang', {
      params: {
        MaNhom: "GP07",
        page: this.CurrentPage.toString(),
        pageSize: this.pageSize.toString(),
      },
    }
    ).subscribe(
      (res: any) => {
        console.log(res);
        this.totalItems = res.totalCount;
        this._courseSerivce.setCourseList(res.items);
      },
      (err) => {
        console.log(err);
      },
    )
  }

}
