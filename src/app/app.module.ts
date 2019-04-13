import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { CafeComponent } from './user/user.component';
import { MainOptionComponent } from './main-option/main-option.component';
import {CafeService} from './services/cafe.service';

@NgModule({
  declarations: [
    AppComponent,
    CafeComponent,
    MainOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CafeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
