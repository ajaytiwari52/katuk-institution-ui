import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseModel} from '../home/shared/course.model';
import {StoreService} from '../home/shared/store.service';
import {Student} from './Student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private courseId: string;
  private course: CourseModel;
  private student: Student;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private storeService:StoreService) {
  }

  ngOnInit() {
    this.student = new Student();
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

  register() {
    this.storeService.write('mycourse', this.course);
    this.storeService.write('student', this.student);
    this.router.navigate(['/mycourses']);
  }
}
