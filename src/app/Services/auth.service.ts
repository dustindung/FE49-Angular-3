import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token: string;
  @Output() tokenEmitter = new EventEmitter();
  constructor() {}

  setToken(val: string) {
    this.token = val;
    this.tokenEmitter.emit(this.token);
  }
}
