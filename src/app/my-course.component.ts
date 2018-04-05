import { Component, OnInit } from '@angular/core';
import {StoreService} from '../home/shared/store.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {
  private myCourses: any;

  constructor(private storeService:StoreService) { }

  ngOnInit() {
    this.myCourses = this.storeService.read('mycourse');
  }

}
