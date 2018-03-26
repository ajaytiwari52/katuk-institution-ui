import {TestBed, inject, getTestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HomeComponent} from './home.component';
import {HomeService} from './shared/home.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub} from '../../testing/activated-route-stub';
import {HomeServiceStub} from '../../testing/HomeServiceStub';


describe('HomeComponent', () => {
  let testBed: TestBed;
  let homeServiceStub: Partial<HomeService>;
  let homeService: HomeService;
  let homeComponent;
  let fixture;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  homeServiceStub = <HomeService>new HomeServiceStub();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: HomeService, useValue: homeServiceStub}, {provide: ActivatedRoute, useValue: {
      data: {
        subscribe: (fn: (value: Data) => void) => fn({
          company: "",
        }),
      },
      params: {
        subscribe: (fn: (value: Params) => void) => fn({
          tab: 0,
        }),
      },
      snapshot: {
        url: [
          {
            path: 'foo',
          },
          {
            path: 'bar',
          },
          {
            path: 'baz',
          },
        ],
        paramMaps: { get: ()=>{ return ""}}
      },
    }},
        {provide: Router, useValue: routerSpy}]
    });
    testBed = getTestBed();
    fixture = testBed.createComponent(HomeComponent);
    homeComponent = fixture.componentInstance;
    homeService = testBed.get(HomeService);
    // fixture.detectChanges();
  });
  it('stub object and injected UserService should be the same', () => {
    expect(homeServiceStub === homeService).toBe(true);
  });
  it('should navigate to', () => {
    const courses = [
      {
        'id': 'fs',
        'name': 'First Semester',
        'price': 2000,
        'duration': 3
      }];
    homeComponent.ngOnInit();
    expect(homeServiceStub.getCourses).toHaveBeenCalled();
  });

});
