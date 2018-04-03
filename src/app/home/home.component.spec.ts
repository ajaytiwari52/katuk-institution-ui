import {TestBed, inject, getTestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HomeComponent} from './home.component';
import {HomeService} from './shared/home.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub} from '../../testing/activated-route-stub';
import {HomeServiceStub} from '../../testing/HomeServiceStub';


describe('HomeComponent', () => {
  let testBed: TestBed;
  let homeService: HomeService;
  let homeComponent;
  let fixture;
  let homeserviceStub;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const fakeActivatedRoute = {
    snapshot: {data: {id: 'id'}}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: HomeService, useClass: HomeServiceStub},
        {provide: Router, useValue: routerSpy}, {provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    });
    testBed = getTestBed();
    fixture = testBed.createComponent(HomeComponent);
    homeComponent = fixture.componentInstance;
    homeserviceStub = fixture.debugElement.injector.get(HomeService);
    // fixture.detectChanges();
  });
  it('should show courses', () => {
    const courses = [
      {
        'id': 'fs',
        'name': 'First Semester',
        'price': 2000,
        'duration': 3
      }];
    spyOn(homeserviceStub, 'getCourses').and.returnValue(
      of(courses)
    );
    expect(homeComponent.courses).toEqual(courses);
  });

});
