import {Component, OnInit} from '@angular/core';
import {CafeService} from '../cafe.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) {
  }

  type;

  subscribeToType(): void {
    this.cafeService.whatType
      .subscribe(value => {
        this.type = value;
      });
  }

  ngOnInit() {
    this.subscribeToType();
    console.log(this.type);
  }

}
