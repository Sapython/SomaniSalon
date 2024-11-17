import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpVerificationRoutingModule } from './otp-verification-routing.module';
import { OtpVerificationComponent } from './otp-verification.component';


@NgModule({
  declarations: [
    OtpVerificationComponent
  ],
  imports: [
    CommonModule,
    OtpVerificationRoutingModule,
    SharedModule
  ]
})
export class OtpVerificationModule { }
