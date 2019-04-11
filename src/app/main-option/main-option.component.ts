import {Component, OnInit} from '@angular/core';
import {CafeService} from '../cafe.service';

@Component({
  selector: 'app-main-option',
  templateUrl: './main-option.component.html',
  styleUrls: ['./main-option.component.css']
})
export class MainOptionComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) {
  }

  isMenuClicked = false;

  ngOnInit() {
  }

  menuClick(): void {
    this.isMenuClicked = !this.isMenuClicked;
    this.cafeService.isMenuClicked.next(this.isMenuClicked);
  }

}
