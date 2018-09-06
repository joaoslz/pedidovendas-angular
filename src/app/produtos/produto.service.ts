import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './produto';
import { URLSearchParams } from 'url';
import { ProdutoFiltro } from './produto-filtro';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/produtos';
//const URL:string = 'http://www.mocky.io/v2/5b870621340000c4088b5855';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  // injeção de dependência
  constructor(private http: HttpClient) { }


  obterTodosOsProdutos(): Observable<Produto[]> {
    return this.http
               .get<Produto[]>(URL);
  }


  salva(produto: Produto): Observable<Produto> {
    return this.http
               .post<Produto>(URL, produto, { headers: this.httpHeaders });

  }

  getProduto(id): Observable<Produto> {
    return this.http
               .get<Produto>(`${URL}/${id}`);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.http
               .put<Produto>(`${URL}/${produto.id}`,
                             produto,
                             { headers: this.httpHeaders } );
  }

  pesquisar(filtro: ProdutoFiltro) {
    const params = new URLSearchParams();
    const headers = new Headers();

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }
    if (filtro.precoDe) {
      params.set('precoDe', filtro.precoDe.toString());
    }
    if (filtro.precoAte.toString()) {
      params.set('precoAte', filtro.precoAte.toString());
    }
  }
}
