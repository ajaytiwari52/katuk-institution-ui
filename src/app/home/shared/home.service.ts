import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from './course.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>('http://localhost:3004/courses');
  }

}
