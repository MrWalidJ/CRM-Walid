import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}
  submitLogin(): void {
    this.as
      .login(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.as.setSessionData("email", data.user.email as string);
        this.as.setSessionData("isLoggedIn","true");
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        alert("Wrong email or password");
        this.user = { email: '', password: '' };
      });
  }

  submitLoginWithGoogle(): void {
    this.as
      .loginwithGoogle()
      .then((data) => {
        console.log(data.user.email);
        this.as.setSessionData("email", data.user.email as string);
        this.as.setSessionData("isLoggedIn","true");
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        console.log(err);
        alert('Wrong google account');
      });
  }
}
