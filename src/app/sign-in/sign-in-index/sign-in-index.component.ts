import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: "app-sign-in-index",
  templateUrl: "./sign-in-index.component.html",
  styleUrls: ["./sign-in-index.component.scss"],
})
export class SignInIndexComponent implements OnInit {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  error: string;

  ngOnInit(): void {}

  handleLogin(form: NgForm) {
    console.log(form.value);
    this._http
      .post(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        form.value
      )
      .subscribe(
        (res: any) => {
          localStorage.setItem("t", res.accessToken);
          this._authService.setToken(res.accessToken);
          this.error = "";
        },
        (err) => {
          this.error = err.error;
        }
      );
  }
}
