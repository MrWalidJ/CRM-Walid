import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(user: User): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  // registration
  register(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }
  //tasks: register interface + guard

  loginwithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout():Promise<void>{
    return this.auth.signOut(); // signOut is a built in method
  }

  getSessionData(key:string): string{
    return sessionStorage.getItem(key) as string;
  }

  setSessionData(key:string , value:string): void{
     sessionStorage.setItem(key,value)  ;
  }


}