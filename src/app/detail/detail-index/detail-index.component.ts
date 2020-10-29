import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss']
})
export class DetailIndexComponent implements OnInit, OnDestroy {

  fetchCourseDetailSubscription: Subscription;

  constructor(private _activedRoute: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {
    const courseId = this._activedRoute.snapshot.params.id;
    // console.log('courseId', courseId);
    this.fetchCourseDetail(courseId);

  }

  fetchCourseDetail(id: string) {
    this.fetchCourseDetailSubscription = this._http.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc', {
      params: {
        maKhoaHoc: "1",
      },
    }).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.fetchCourseDetailSubscription.unsubscribe();
  }



}
