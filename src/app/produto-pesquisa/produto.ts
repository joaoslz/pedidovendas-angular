export interface Produto {

    id: number,
    nome:string
    precoAtual: number,
    ativo: boolean,
    quantidadeEstoque: number,
    categorias: Categoria[] 
 }
 
 export interface Categoria {
    id: number,
    nome:string
}
 