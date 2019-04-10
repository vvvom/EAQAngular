import {Component, OnInit} from '@angular/core';
import {Response} from './models/Response';
import {CafeService} from './services/cafe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private cafeService: CafeService
  ) {
  }

  cafeData;
  isLogged = !!localStorage.getItem('token');

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
        }
      });
  }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.removeItem('token');
    this.isLogged = false;
  }
}
