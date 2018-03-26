import {TestBed, inject, getTestBed, async} from '@angular/core/testing';
import {HomeService} from './shared/home.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CourseModel} from './shared/course.model';


describe('HomeService', () => {
  let service: HomeService;
  let testBed: TestBed;
  let httpMock: HttpTestingController;
  let courses: CourseModel[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    testBed = getTestBed();
    httpMock = TestBed.get(HttpTestingController);
    courses = [
      {
        'id': 'fs',
        'name': 'First Semester',
        'price': 2000,
        'duration': 3
      }

  });

  it('should be created', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));

  it('should return courses', async(inject([HomeService], (service: HomeService) => {
    service.getCourses().subscribe(results => {
      expect(results).toBeDefined();
      expect(results.data).toEqual(courses);
    });
    const request = httpMock.expectOne('http://localhost:3004/courses');
    expect(request.request.method).toEqual('GET');
    request.flush({message:"Success", data:courses});
    httpMock.verify();
  })));
});
