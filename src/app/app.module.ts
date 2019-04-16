import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MainOptionComponent} from './main-option/main-option.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MenuWorkspaceComponent} from './menu-workspace/menu-workspace.component';
import {MenuCategoriesComponent} from './menu-categories/menu-categories.component';
import {StatisticWorkspaceComponent} from './statistic-workspace/statistic-workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOptionComponent,
    MenuWorkspaceComponent,
    MenuCategoriesComponent,
    StatisticWorkspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
