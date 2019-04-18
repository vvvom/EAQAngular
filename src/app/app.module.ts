import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MainOptionComponent} from './main-option/main-option.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MenuWorkspaceComponent} from './menu-workspace/menu-workspace.component';
import {StatisticWorkspaceComponent} from './statistic-workspace/statistic-workspace.component';
import {CafeLoginComponent} from './cafe-login/cafe-login.component';
import {CafeService} from './services/cafe.service';

@NgModule({
  declarations: [
    AppComponent,
    MainOptionComponent,
    MenuWorkspaceComponent,
    StatisticWorkspaceComponent,
    CafeLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    CafeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
