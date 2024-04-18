export class Servico{


    constructor(id,descricao,duracao,tipo){
        this.id = id
        this.descricao = descricao
        this.duracao = duracao,
        this.tipo = tipo
    }


    getId(){
        return this.id
    }


    getDescricao(){
        return this.descricao
    }


    getDuracao(){
        return this.duracao
    }


    getTipo(){
        return this.tipo
    }
}