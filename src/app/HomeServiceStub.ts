import {Observable} from 'rxjs/Observable';

export class HomeServiceStub {
  constructor() {
  }

  public getCourses() {
    let obj = {
        subscribe: () => {
        }
      };
      return obj;
  }
}