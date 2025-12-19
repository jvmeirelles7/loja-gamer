import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  senha = '';
  erro = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  fazerLogin(): void {
    const logou = this.loginService.login(this.usuario, this.senha);

    if (logou) {
      this.router.navigate(['/restrito/lista']);
    } else {
      this.erro = 'Usuário ou senha inválidos';
    }
  }
}
