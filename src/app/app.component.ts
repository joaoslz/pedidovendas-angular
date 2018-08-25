import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    produtos = [
      {
          "id": 4,
          "nome": "Computador All-in-one LG",
          "precoAtual": 18199.9,
          "ativo": true,
          "quantidadeEstoque": 4,
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
          "quantidadeEstoque": 9,
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
          "quantidadeEstoque": 10,
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
          "quantidadeEstoque": 14,
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
          "quantidadeEstoque": 20,
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
          "quantidadeEstoque": 3,
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
          "quantidadeEstoque": 9,
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
          "quantidadeEstoque": 12,
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
          "quantidadeEstoque": 10,
          "categorias": [
              {
                  "id": 3,
                  "nome": "Livro"
              }
          ]
      }
  ];

}
