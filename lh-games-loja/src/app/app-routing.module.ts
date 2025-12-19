import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { AuthGuard } from './guard.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'restrito',
    component: RestritoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'lista', component: ListaProdutoComponent },
      { path: 'cadastro', component: CadastroProdutoComponent }
    ]
  },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
