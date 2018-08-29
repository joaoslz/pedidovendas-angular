import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { ProdutoPesquisaComponent } from './produto-pesquisa/produto-pesquisa.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProdutoPesquisaComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule, InputTextModule, ButtonModule, TableModule, TooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
