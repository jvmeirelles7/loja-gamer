import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  produto: Produto = new Produto(0, '', '', '', 0);

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private loginService: LoginService
  ) {}

  cadastrar(): void {
    this.produtoService.cadastrarProduto(this.produto).subscribe({
      next: () => {
        alert('Cadastro efetuado com sucesso');
        this.router.navigate(['/restrito/lista']);
      },
      error: () => alert('Erro ao cadastrar')
    });
  }
}
