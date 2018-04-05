import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule {

}
