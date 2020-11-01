import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sign-up-index",
  templateUrl: "./sign-up-index.component.html",
  styleUrls: ["./sign-up-index.component.scss"],
})
export class SignUpIndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }
}
