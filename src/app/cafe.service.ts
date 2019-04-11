import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor() {
  }

  isMenuClicked = new BehaviorSubject(false);
  whatType = new BehaviorSubject('default');

}
