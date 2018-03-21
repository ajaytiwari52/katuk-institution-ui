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
  isFS = false;
  isSS = false;
  isTS = false;
  courses: CourseModel[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getCourses().subscribe(data => {
        this.courses = data;
        console.log(this.courses);
    });
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!_.isUndefined(this.courseId)) {
      if (this.courseId === 'fs') {
        this.isFS = true;
      } else if (this.courseId === 'ss') {
        this.isSS = true;
      } else {
        this.isTS = true;
      }
    }
  }

  goTo(course: any) {
    console.log(course);
    this.router.navigate(['/registration', course.id]);
  }
}
