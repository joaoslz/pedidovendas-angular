import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ProdutosModule } from './produtos/produtos.module';
import { AppRotasModule } from './app.rotas.module';
import { ErrosModule } from './erros/erros.module';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent
  ],
 
  imports: [
    BrowserModule, 
    ProdutosModule,
    AppRotasModule,
    ErrosModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
