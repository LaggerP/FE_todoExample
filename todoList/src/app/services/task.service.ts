import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskServices {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/api/';


  getAllTask():Observable<any> {
    return this.http.get(this.baseUrl);

  }
  newTask (taskInfo: String):Observable<any> {
      return this.http.post(this.baseUrl + 'addTask', {taskInfo});
  }
}
