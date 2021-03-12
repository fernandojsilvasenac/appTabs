import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Login } from '../users/shared/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
    private router: Router
  ) { }


  login(login: Login){
    return this.afa.signInWithEmailAndPassword(login.email, login.password)
  }

  logout(){
    this.afa.signOut();
    this.router.navigate(['/login']);
  }
}
