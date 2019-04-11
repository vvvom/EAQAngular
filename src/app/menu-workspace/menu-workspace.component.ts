import { Component, OnInit } from '@angular/core';
import {CafeService} from '../cafe.service';

@Component({
  selector: 'app-menu-workspace',
  templateUrl: './menu-workspace.component.html',
  styleUrls: ['./menu-workspace.component.css']
})
export class MenuWorkspaceComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) { }

  type;

  ngOnInit() {
  }

  foodClicked() {
    this.type = 'food';
    this.cafeService.whatType.next(this.type);
    console.log(this.cafeService.whatType.value);
  }

  drinkClicked() {
    this.type = 'drink';
    this.cafeService.whatType.next(this.type);
    console.log(this.cafeService.whatType.value);
  }
}
