import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CafeService} from '../services/cafe.service';

@Component({
  selector: 'app-menu-workspace',
  templateUrl: './menu-workspace.component.html',
  styleUrls: ['./menu-workspace.component.css']
})
export class MenuWorkspaceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cafeService: CafeService
  ) {
  }

  table;
  type = 'food';
  isLogged;

  ngOnInit() {
    this.table = +this.route.snapshot.paramMap.get('table');
    this.subscribeToLogin();
  }

  subscribeToLogin() {
    this.cafeService.isLogged.subscribe((data) => {
      this.isLogged = data;
    });
  }

  foodClick() {
    this.type = 'food';
  }

  drinkClick() {
    this.type = 'drink';
  }
}
