import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:{valid: boolean} = {
    valid: false,
  }

  constructor() { }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  ngOnInit() {
    const password = document.querySelector('.password')
    const email = document.querySelector('.email')

   
  }

  login(){

  }

}
