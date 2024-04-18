export class Cliente{


    constructor(nome,email,telefone,foto){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.foto = foto
    }


    getNome(){
        return this.nome
    }


    getEmail(){
        return this.email
    }


    getTelefone(){
        return this.telefone
    }


    getFoto(){
        return this.foto
    }
}