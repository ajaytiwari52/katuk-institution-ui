import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

  goTo(course: string) {
    this.router.navigate(['/registration', course]);
  }
}
