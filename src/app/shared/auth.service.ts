import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { UsersAgentesaude } from './../users/shared/users-agentesaude';
import { UsersPaciente } from './../users/shared/users-paciente';
import { Login } from './../users/shared/login';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: string;
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }


  login(login: Login){
    return this.afa.signInWithEmailAndPassword(login.email, login.password)
  }

  logout(){
    this.afa.signOut();
    this.router.navigate(['/login']);
  }

  registerPaciente(user: UsersPaciente){
    this.afa.createUserWithEmailAndPassword(user.email, user.password);

    this.afa.onAuthStateChanged((credential)=>{
      credential.updateProfile({displayName: user.name, photoURL: ''});
      if(credential){
        this.registerUserPaciente(user, credential.uid);
      }
    })
  }

  registerUserPaciente(user: UsersPaciente, id: string){
        const { tipousuario, name, email, cartaosus, faixaetaria  } = user;
        this.afs.collection('users').doc(id).set(
          {
            tipousuario: tipousuario,
            name: name,
            email: email,
            cartaosus: cartaosus,
            faixaetaria: faixaetaria,
          }
        )
      }
  registerAgentesaude(user: UsersAgentesaude){

  }

  resetPassword(login: Login){
    this.afa.sendPasswordResetEmail(login.email);
  }
}
