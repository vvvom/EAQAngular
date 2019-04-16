import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
  }

  type;

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

}
