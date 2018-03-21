import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registration/:course', component: RegistrationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {enableTracing: true}
      )
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {
}
