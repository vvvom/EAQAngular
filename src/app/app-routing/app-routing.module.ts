import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainOptionComponent} from '../main-option/main-option.component';
import {MenuWorkspaceComponent} from '../menu-workspace/menu-workspace.component';
import {MenuCategoriesComponent} from '../menu-categories/menu-categories.component';

const routes = [
  {path: 'main/option', component: MainOptionComponent},
  {path: 'menu', component: MenuWorkspaceComponent},
  {path: 'menu/categories/:type', component: MenuCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
