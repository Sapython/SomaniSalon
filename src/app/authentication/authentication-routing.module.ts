import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'forgotPassword', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'otpVerification', loadChildren: () => import('./otp-verification/otp-verification.module').then(m => m.OtpVerificationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
