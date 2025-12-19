import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu = false;

  constructor(private loginService: LoginService) {
    this.loginService.getMostraMenu().subscribe(
      valor => this.mostrarMenu = valor
    );
  }
}
