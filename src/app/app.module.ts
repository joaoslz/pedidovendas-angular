import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoPesquisaComponent } from './produtos/pesquisa/produto-pesquisa.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent
 /* 
    ProdutoPesquisaComponent,
    ProdutoFormComponent
 */
  ],
 
  imports: [
    BrowserModule, 
    ProdutosModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
