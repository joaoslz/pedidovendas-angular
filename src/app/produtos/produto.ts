export class Produto {

    id: number;
    nome:string;
    precoAtual: number;
    ativo: boolean = true;
    quantidadeEstoque: number;
    categorias: Categoria[]; 
 }
 
 export class Categoria {
    id: number;
    nome:string;
}
 