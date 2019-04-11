import {Component, Input, OnInit} from '@angular/core';
import {CafeService} from './cafe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) {
  }

  isLogged = false;
  isMenuClicked;
  isCategoryClicked;

  loginClick() {
    this.isLogged = true;
  }

  signOutClick() {
    this.isLogged = false;
  }

  subscribeToMenuClick(): void {
    this.cafeService.isMenuClicked
      .subscribe(value => {
        this.isMenuClicked = value;
      });
  }

  subscribeToCategoryClick(): void {
    this.cafeService.whatType
      .subscribe(value => {
        this.isMenuClicked = value;
      });
  }

  ngOnInit() {
    this.subscribeToMenuClick();
    this.subscribeToCategoryClick();
  }

}
