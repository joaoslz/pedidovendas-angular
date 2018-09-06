import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import {Router, ActivatedRoute} from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

 private produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService,
              private router: Router,
              private activationRote: ActivatedRoute   ) { }

  ngOnInit() {
    this.carregarProduto();
  }

  public salvar(): void {
    console.log('salvar produto ...')
    console.log(this.produto );
   
     /*   this.produtoService.salva(this.produto )
        .subscribe(resposta => this.router.navigate(['produtos/pesquisa'])
    );  */

    this.produtoService.salva(this.produto )
                      .subscribe(
                        produto => {
                          this.router.navigate(['produtos/pesquisa'] );
                          swal('Novo Produto', 
                               `Produto ${produto.nome} foi cadastrado com sucesso.`,
                              'success' );
                        });
   }

   carregarProduto(): void {
     this.activationRote.params.subscribe(params => {
       let id = params['id'];
       if (id ) {
         this.produtoService.getProduto(id)
             .subscribe( produto => this.produto = produto );
             console.log('Produto Edição ' + this.produto);

       }    

     });
   }

   atualizar():void {
    this.produtoService.atualizar(this.produto)
    .subscribe( produto => {
      this.router.navigate(['/produtos/pesquisa'])
      swal('Produto Atualizado', `Produto ${produto.nome} atualizado com sucesso!`, 'success')
    });
  }







}
