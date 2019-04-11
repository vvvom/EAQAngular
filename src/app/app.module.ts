import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainOptionComponent } from './main-option/main-option.component';
import { MenuWorkspaceComponent } from './menu-workspace/menu-workspace.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOptionComponent,
    MenuWorkspaceComponent,
    MenuCategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
