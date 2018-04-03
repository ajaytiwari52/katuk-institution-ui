import {TestBed, inject, getTestBed, async} from '@angular/core/testing';
import {HomeService} from './home.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from './course.model';


describe('HomeService', () => {
  let homeService: HomeService;
  let testBed: TestBed;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    homeService = TestBed.get(HomeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));

  it('should show courses', async(inject([HomeService], (service: HomeService) => {
    let expectedCourses: CourseModel[];

    expectedCourses = [
      {
        'id': 'fs',
        'name': 'First Semester',
        'price': '2000',
        'duration': 3
      }] as CourseModel[];

    service.getCourses().subscribe(results => {
      expect(results).toEqual(expectedCourses, 'should return expected courses');
    });


    const request = httpTestingController.expectOne('http://localhost:3004/courses');
    expect(request.request.method).toEqual('GET');
    request.flush(expectedCourses);
  })));
});
