import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoPesquisaService {
  
      // injeção de dependência
      constructor(private http: HttpClient) {  }


      obterTodosOsProdutos() {
       return this.http
                  .get<Produto[]>('http://www.mocky.io/v2/5b870621340000c4088b5855')
       }


       // atualiza()

       // remove()
}
