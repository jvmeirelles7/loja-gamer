import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private mostraMenu = new Subject<boolean>();

  constructor(private router: Router) {}

  login(usuario: string, senha: string): boolean {
    if (usuario === 'aluno' && senha === '1234') {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(true); // MOSTRA menu
      return true;
    } else {
      this.mostraMenu.next(false);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.mostraMenu.next(false);
    this.router.navigate(['/login']);
  }

  isLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
