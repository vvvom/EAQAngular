import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CafeService} from '../services/cafe.service';
import {TypeDrinkService} from '../services/type-drink.service';
import {Response} from '../models/Response';
import {TypeDrink} from '../models/TypeDrink';
import {TypeFoodService} from '../services/type-food.service';

@Component({
  selector: 'app-menu-workspace',
  templateUrl: './menu-workspace.component.html',
  styleUrls: ['./menu-workspace.component.css']
})
export class MenuWorkspaceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cafeService: CafeService,
    private typeDrinkService: TypeDrinkService,
    private typeFoodServise: TypeFoodService
  ) {
  }

  table;
  type = 'food';
  isLogged;
  typeDrinks: TypeDrink[];
  showAddTypeForm = false;
  typeData;


  ngOnInit() {
    this.table = +this.route.snapshot.paramMap.get('table');
    this.subscribeToLogin();
    this.getAllTypeDrink();
  }

  getAllTypeDrink() {
    this.typeDrinkService.getAllTypeDrinkData()
      .subscribe((response: Response) => {
        if (response.success) {
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

  openInputAddType() {
    this.showAddTypeForm = true;
  }

  sendTypeData(type: string): void {
    this.typeData = {
      type
    };
    if (this.type === 'drink') {
      this.typeDrinkService.addNewTypeDrink(this.typeData)
        .subscribe((response: Response) => {
          if (response.success) {
            console.log(response.message);
            this.getAllTypeDrink();
          }
        });
    }
  }

  closeForm() {
    this.showAddTypeForm = false;
  }
}
