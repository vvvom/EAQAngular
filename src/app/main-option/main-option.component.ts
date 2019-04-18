import {Component, OnInit} from '@angular/core';
import {CafeService} from '../services/cafe.service';

@Component({
  selector: 'app-main-option',
  templateUrl: './main-option.component.html',
  styleUrls: ['./main-option.component.css']
})
export class MainOptionComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) { }

  showMenu = true;
  showStatistic = false;

  isMenuClicked(): void {
    this.showMenu = true;
    this.showStatistic = false;
  }

  isStatisticClicked(): void {
    this.showMenu = false;
    this.showStatistic = true;
  }
   ngOnInit() {
  }

}
