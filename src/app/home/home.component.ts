import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {HomeService} from './shared/home.service';
import {CourseModel} from './shared/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private courseId: string;
  isSelected: number;
  courses: CourseModel[];
  courseEnum = ['fs', 'ss', 'ts'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private homeService: HomeService) {
    this.homeService.getCourses().subscribe(data => {
      this.courses = <CourseModel[]>data;
    });
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isSelected = this.courseEnum.indexOf(this.courseId);
  }

  goTo(course: any) {
    this.router.navigate(['/registration', course.id]);
  }
}
