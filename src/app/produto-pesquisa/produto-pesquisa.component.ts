import { Component, OnInit } from '@angular/core';
import { ProdutoPesquisaService } from './produto-pesquisa.service';
import { Produto } from './produto';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent  {

  
    produtos: Produto[]   = [];

     // injeção de dependência
    constructor( private produtoPesquisaService: ProdutoPesquisaService ) {
    
        this.produtoPesquisaService.obterTodosOsProdutos()
            .subscribe( produtos => { 
                 this.produtos =  produtos; 
                 console.log(produtos[0].categorias[0].nome );
             });

    }
 
 /*
    produtos = [
    {
        "id": 4,
        "nome": "Computador All-in-one LG",
        "precoAtual": 18199.9,
        "ativo": true,
        "quantidadeEstoque": 10,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            }
        ]
    },
    {
        "id": 1,
        "nome": "Computador All-in-one Positivo",
        "precoAtual": 2199.9,
        "ativo": true,
        "quantidadeEstoque": 14,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            }
        ]
    },
    {
        "id": 8,
        "nome": "HD SSD 2500gb Seagate",
        "precoAtual": 449,
        "ativo": true,
        "quantidadeEstoque": 30,
        "categorias": [
            {
                "id": 2,
                "nome": "Eletrônico"
            }
        ]
    },
    {
        "id": 9,
        "nome": "HD SSD 480gb Samsung",
        "precoAtual": 499,
        "ativo": true,
        "quantidadeEstoque": 20,
        "categorias": [
            {
                "id": 2,
                "nome": "Eletrônico"
            }
        ]
    },
    {
        "id": 3,
        "nome": "HD SSD 500gb",
        "precoAtual": 849,
        "ativo": true,
        "quantidadeEstoque": 6,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            },
            {
                "id": 2,
                "nome": "Eletrônico"
            }
        ]
    },
    {
        "id": 5,
        "nome": "Notebook Acer Core i3",
        "precoAtual": 1299.5,
        "ativo": true,
        "quantidadeEstoque": 8,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            }
        ]
    },
    {
        "id": 6,
        "nome": "Notebook Samsung Core i5",
        "precoAtual": 1799.9,
        "ativo": true,
        "quantidadeEstoque": 21,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            }
        ]
    },
    {
        "id": 2,
        "nome": "Notebook Samsung Core i7",
        "precoAtual": 2099.5,
        "ativo": true,
        "quantidadeEstoque": 25,
        "categorias": [
            {
                "id": 1,
                "nome": "Informática"
            }
        ]
    },
    {
        "id": 7,
        "nome": "Spring Boot 2.0 Definitivo",
        "precoAtual": 1799.9,
        "ativo": true,
        "quantidadeEstoque": 43,
        "categorias": [
            {
                "id": 3,
                "nome": "Livro"
            }
        ]
    }
];
}

*/