import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {

  }
  email?: string;
  passsword?: string;
  setEmail(event: any) {
    this.email = event.target.value;
  }
  setPassword(event: any) {
    this.passsword = event.target.value;
  }
  ngOnInit(): void {
  }
  login() {
    if (this.email != '' && this.passsword != '') {
      alert('Logging in')
      // this.dataProvider.blur = true;
      // this.authencationService.loginEmailPassword(this.email, this.passsword);
    } else {
      // this.dataProvider.blur = false;
      alert('Please fill all the fields');
    }
  }

}
