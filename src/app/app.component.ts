import {Component, OnInit} from '@angular/core';
import {Response} from './models/Response';
import {CafeService} from './services/cafe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private cafeService: CafeService,
    private router: Router
  ) {
  }

  cafeData;
  isLogged = !!localStorage.getItem('token');
  URL;
  isMenuClicked;

  sendCafeData(name: string, password: string): void {

    this.cafeData = {
      name,
      password
    };

    this.cafeService.sendDataCafe(this.cafeData)
      .subscribe((response: Response) => {
        if (response.success) {
          localStorage.setItem('token', response.message);
          this.isLogged = true;
          this.router.navigateByUrl('/main/option');
        }
      });
  }

  signOut() {
    localStorage.removeItem('token');
    this.isLogged = false;
  }


  ngOnInit(): void {
  }
}
