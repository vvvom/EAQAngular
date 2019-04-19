import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CafeService} from '../services/cafe.service';
import {TypeDrinkService} from '../services/type-drink.service';
import {Response} from '../models/Response';
import {TypeDrink} from '../models/TypeDrink';

@Component({
  selector: 'app-menu-workspace',
  templateUrl: './menu-workspace.component.html',
  styleUrls: ['./menu-workspace.component.css']
})
export class MenuWorkspaceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cafeService: CafeService,
    private typeDrinkService: TypeDrinkService
  ) {
  }

  table;
  type = 'food';
  isLogged;
  typeDrinks: TypeDrink[];

  ngOnInit() {
    this.table = +this.route.snapshot.paramMap.get('table');
    this.subscribeToLogin();
    this.getAllTypeDrink();
  }

  getAllTypeDrink() {
    this.typeDrinkService.getAllTypeDrinkData()
      .subscribe((response: Response) =>{
        if (response.success){
          this.typeDrinks = response.message;
        }
      });
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
