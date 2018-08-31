import { Component, OnInit } from '@angular/core';
import { ProdutoPesquisaService } from './produto-pesquisa.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent  {

    private produtoPesquisaService;
    produtos: Produto[] = [];

     // injeção de dependência
    constructor( produtoPesquisaService: ProdutoPesquisaService ) {
    
        this.produtoPesquisaService = produtoPesquisaService;
        this.produtoPesquisaService.obterTodosOsProdutos()
            .subscribe( produtos => { 
                 this.produtos =  produtos; 
                 console.log(produtos[0].categorias[0].nome );
             });

    }
}
