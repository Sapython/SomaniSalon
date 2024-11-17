import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLogoContainerComponent } from './login-logo-container/login-logo-container.component';



@NgModule({
  declarations: [
    LoginLogoContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginLogoContainerComponent]
})
export class SharedModule { }
