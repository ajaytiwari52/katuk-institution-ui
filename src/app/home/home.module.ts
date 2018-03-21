import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeService} from './shared/home.service';

@NgModule(
  {
    imports: [
      CommonModule,
      FormsModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [
      HomeService
    ],
    exports: [
      CommonModule
    ]
  }
)
export class HomeModule {
}
