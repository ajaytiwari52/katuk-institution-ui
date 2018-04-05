import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';
import {MyCourseComponent} from './my-course/my-course.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registration/:course', component: RegistrationComponent},
  {path: 'mycourses', component: MyCourseComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {enableTracing: false}
      )
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {
}
