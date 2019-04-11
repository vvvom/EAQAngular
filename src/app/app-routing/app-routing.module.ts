import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuWorkspaceComponent} from '../menu-workspace/menu-workspace.component';
import {MenuCategoriesComponent} from '../menu-categories/menu-categories.component';

const routes: Routes = [
  {path: 'menu', component: MenuWorkspaceComponent},
  {path: 'menu/:categories', component: MenuCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
