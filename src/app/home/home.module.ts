import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeService} from './shared/home.service';
import { HttpClientModule } from '@angular/common/http';
import {StoreService} from './shared/store.service';

@NgModule(
  {
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [
      HomeService,
      StoreService
    ],
    exports: [
      CommonModule
    ]
  }
)
export class HomeModule {
}
