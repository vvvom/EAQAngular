import {Component, OnInit} from '@angular/core';
import {CafeService} from './services/cafe.service';
import {Response} from './models/Response';

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
  data = [];


  sendDataCafe(name: string, password: string): void {
    this.cafeData = {
      name,
      password
    };

    this.cafeService.sendDataCafe(this.cafeData)
      .subscribe((response: Response) => {
        if (response.success) {
          localStorage.setItem('token', response.message);
        }
      });
  }

  ngOnInit() {
  }

  getData() {
    this.cafeData.getData()
      .subscribe((response: Response) => {
        if (response.success) {
          this.data = response.message;
        }
      });
  }
}
