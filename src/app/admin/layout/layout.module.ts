import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SideTaskBarComponent } from './side-task-bar/side-task-bar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SideTaskBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, HeaderComponent, SideTaskBarComponent]
})
export class LayoutModule { }
