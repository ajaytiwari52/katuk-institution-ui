import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseModel} from '../home/shared/course.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private courseId: string;
  private course: CourseModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('course');
    this.changeCourseTitle();
  }

  private changeCourseTitle() {
    if (this.courseId === 'fs') {
      this.createCourse('First', '2000', 3);
    } else if (this.courseId === 'ss') {
      this.createCourse('Second', '3000', 3);
    } else {
      this.createCourse('Third', '6000', 3);
    }
  }

  private createCourse(semester: string, price: string, duration: number) {
    this.course = new CourseModel();
    this.course.name = semester + ' Semester';
    this.course.price = price;
    this.course.duration = duration;
  }

  goBack() {
    this.router.navigate(['/home', {id: this.courseId}]);
  }
}
