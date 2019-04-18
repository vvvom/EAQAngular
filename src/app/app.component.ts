import {Component, OnInit} from '@angular/core';
import {Response} from './models/Response';
import {CafeService} from './services/cafe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private cafeService: CafeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  isLogged = !!localStorage.getItem('token');
  table;

  signOut() {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.router.navigateByUrl('/cafe/login');
  }

  subscribeToLogin() {
    this.cafeService.isLogged.subscribe((data) => {
      this.isLogged = data;
    });
  }

  ngOnInit(): void {
    this.table = +this.route.snapshot.paramMap.get('table');
    this.subscribeToLogin();
    // this.router.navigateByUrl('menu/table/0');
  }
}
