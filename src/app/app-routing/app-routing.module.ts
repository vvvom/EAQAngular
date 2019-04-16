import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainOptionComponent} from '../main-option/main-option.component';
import {MenuWorkspaceComponent} from '../menu-workspace/menu-workspace.component';
import {MenuCategoriesComponent} from '../menu-categories/menu-categories.component';
import {AppComponent} from '../app.component';
import {StatisticWorkspaceComponent} from '../statistic-workspace/statistic-workspace.component';

const routes = [
  {path: '', redirectTo: 'cafe/login', pathMatch: 'full'},
  {path: 'cafe/login', component: AppComponent},
  {path: 'main/option', component: MainOptionComponent},
  {path: 'menu/:table', component: MenuWorkspaceComponent},
  {path: 'menu/categories/:type', component: MenuCategoriesComponent},
  {path: 'statistic', component: StatisticWorkspaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
