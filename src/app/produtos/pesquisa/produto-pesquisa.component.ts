import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { ProdutoFiltro } from '../produto-filtro';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent implements OnInit {

    produtos: Produto[] = [];

    private produtoFiltro: ProdutoFiltro;

    constructor(private produtoPesquisaService: ProdutoService ) {  }

    ngOnInit() {  this.buscarTodosProdutos();   }

    buscarTodosProdutos() {
        
        this.produtoPesquisaService.obterTodosOsProdutos()
        .subscribe( produtos => { 
             this.produtos =  produtos; 
         });
    }

    pesquisar() {
       /*  this.produtoPesquisaService
          .pesquisar(this.produtoFiltro )
          .subscribe(produtos => this.produtos = produtos ); */
    }

}
