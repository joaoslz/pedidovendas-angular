import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ProdutoPesquisaComponent } from './pesquisa/produto-pesquisa.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
   
  declarations: [
    ProdutoPesquisaComponent,
    ProdutoFormComponent
  ], 

  imports: [
    CommonModule,
    InputTextModule, ButtonModule, TableModule, TooltipModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ] ,

  exports: [
    ProdutoPesquisaComponent, 
    ProdutoFormComponent
  ] 

})
export class ProdutosModule { }
