import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from './course.model';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  public getCourses() {
    return this.http.get<CourseModel[]>('http://localhost:3004/courses');
  }

}
