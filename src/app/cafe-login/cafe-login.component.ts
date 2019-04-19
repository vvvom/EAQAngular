import {Component, OnInit} from '@angular/core';
import {Response} from '../models/Response';
import {CafeService} from '../services/cafe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cafe-login',
  templateUrl: './cafe-login.component.html',
  styleUrls: ['./cafe-login.component.css']
})
export class CafeLoginComponent implements OnInit {

  constructor(private cafeService: CafeService,
              private router: Router) {
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
          this.cafeService.isLogged.next(this.isLogged);
          this.router.navigateByUrl(`menu/table/0`);

        }
      });
  }



  ngOnInit() {
  }

}
