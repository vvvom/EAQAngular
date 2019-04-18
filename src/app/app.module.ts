import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CafeService} from './services/cafe.service';
import { MainOptionComponent } from './main-option/main-option.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { MenuWorkspaceComponent } from './menu-workspace/menu-workspace.component';
import { StatisticWorkspaceComponent } from './statistic-workspace/statistic-workspace.component';



@NgModule({
  declarations: [
    AppComponent,
    MainOptionComponent,
    MenuWorkspaceComponent,
    StatisticWorkspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CafeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
