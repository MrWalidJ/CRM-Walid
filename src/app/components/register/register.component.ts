import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private as:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }
  submitRegister(){
this.as.register(this.user).then((data) => {
  alert("Successfully registered")
  this.as.setSessionData("username", data.user.email as string);
  this.as.setSessionData("isLoggedIn","true");
  this.router.navigateByUrl('login');
})
.catch((err) => {
  alert('Something went wrong !!');
  this.user = { email: '', password: '' };
});
  }
}

