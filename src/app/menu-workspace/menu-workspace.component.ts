import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CafeService} from '../services/cafe.service';
import {TypeDrinkService} from '../services/type-drink.service';
import {Response} from '../models/Response';
import {TypeDrink} from '../models/TypeDrink';
import {TypeFood} from '../models/TypeFood';
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
  typeDrink: TypeDrink[];
  typeFood: TypeFood[];
  showAddTypeForm = false;
  typeData;

  ngOnInit() {
    this.table = +this.route.snapshot.paramMap.get('table');
    this.subscribeToLogin();
    this.getAllTypeFood();
    this.getAllTypeDrink();
  }

  // get Type Drink
  getAllTypeDrink() {
    this.typeDrinkService.getAllTypeDrinkData()
      .subscribe((response: Response) => {
        if (response.success) {
          this.typeDrink = response.message;
        }
      });
  }

  // get Type Food
  getAllTypeFood() {
    this.typeFoodServise.getAllTypeFoodData()
      .subscribe((response: Response) => {
        if (response.success) {
          this.typeFood = response.message;
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

  // add new TypeDrink
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
    } else if (this.type === 'food') {
      this.typeFoodServise.addNewTypeFood(this.typeData)
        .subscribe((response: Response) => {
          if (response.success) {
            console.log(response.message);
            this.getAllTypeFood();
          }
        });
    }
  }

  closeForm() {
    this.showAddTypeForm = false;
  }

// delete DRINK TYPE
  deleteTypeDrink(type) {
    this.typeDrinkService.deleteTypeDrink(type)
      .subscribe((response: Response) => {
        if (response.success) {
          console.log(response.message);
          this.getAllTypeDrink();
        }
      });
  }

  // delete FOOD TYPE

}
