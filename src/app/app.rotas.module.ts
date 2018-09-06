import { NgModule } from "@angular/core";
import { ProdutoPesquisaComponent } from "./produtos/pesquisa/produto-pesquisa.component";
import { ProdutoFormComponent } from "./produtos/produto-form/produto-form.component";

import { RouterModule, Routes, Router } from '@angular/router';
import { Erro404Component } from "./erros/erro404/erro404.component";


const rotas : Routes = [
  {path: '', redirectTo: '/produtos/pesquisa', pathMatch:'full'  },
  {path: 'produtos/pesquisa', component: ProdutoPesquisaComponent  },
  {path: 'produtos/form', component: ProdutoFormComponent  },
  {path: 'produtos/form/:id', component: ProdutoFormComponent  },
  {path: '**', component: Erro404Component  }

];

@NgModule ({
   imports: [ 
       RouterModule.forRoot(rotas) 
    ],
    exports: [RouterModule]
})
export class AppRotasModule { }