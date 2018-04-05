import { Component } from '@angular/core';
import {StoreService} from './home/shared/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private mycourses: any;
  constructor(private storeSerice: StoreService){
    this.mycourses = this.storeSerice.read('mycourse');
  }

  logout(){
    this.storeSerice.write('mycourse','');
  }

  profile(){

  }
}
