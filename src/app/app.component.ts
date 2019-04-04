import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Response} from './models/Response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  userData;
  data = [];

  sendUserData(name: string, password: string): void {

    this.userData = {
      name,
      password
    };

    this.userService.sendDataUser(this.userData)
      .subscribe( (response: Response) => {
          if (response.success) {
            localStorage.setItem('token', response.message);
          }
      });
  }

  ngOnInit(): void {
  }

  getData() {
      this.userService.getData()
        .subscribe((response: Response) => {
          if (response.success) {
            this.data = response.message;
          }
        });
  }
}
