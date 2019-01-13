import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentServerService {

  constructor(private _http : HttpClient) { }
  _url = "http://localhost:3000/enroll";
  enroll(User : user){
    return this._http.post<any>(this._url, User);
  }
}
