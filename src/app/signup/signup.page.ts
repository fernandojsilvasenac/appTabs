import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersAgentesaude } from './../users/shared/users-agentesaude';
import { UsersPaciente } from './../users/shared/users-paciente';
import { ToastService } from './../shared/toast.service';
import { AuthService } from './../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usersPaciente: UsersPaciente;
  usersAgentesaude: UsersAgentesaude;
  tipousuario: string;
  email: string;
  password: string;
  user: string;

  constructor(private auth:AuthService,
    private afa: AngularFireAuth,
    private toast: ToastService,
    private router: Router) { }

  ngOnInit() {
    this.usersPaciente = new UsersPaciente();
    this.usersAgentesaude = new UsersAgentesaude();
  }

  onChange(){
    console.log(this.tipousuario)
  }

  async registerPaciente(){
    this.usersPaciente.email = this.email;
    this.usersPaciente.password = this.password;
    this.usersPaciente.tipousuario = this.tipousuario;

    try {
      await this.auth.registerPaciente(this.usersPaciente);
      this.toast.showMessageBottom('Usuário registrado com sucesso !!!', 'secondary');
      this.router.navigate(['tabs']);
    } catch (error) {
      this.toast.showMessageTop(error,'danger');
    }
  }


  registerAgentesaude(){

  }

}
