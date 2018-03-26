import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
describe('AppComponent', () => {
  const appRoutes: Routes = [
    {path: 'home', component: HomeComponent}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AppComponent
      ],
      imports:[
        BrowserModule,
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: false}
        )
      ],
      providers:[
        {provide:APP_BASE_HREF, useValue: 'app'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
