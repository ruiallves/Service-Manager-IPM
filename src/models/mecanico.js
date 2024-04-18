export class Mecanico{

    constructor(id,email,password,nome,especialidade,posto,foto){
        this.id = id
        this.email = email
        this.password = password
        this.nome = nome
        this.especialidade = especialidade
        this.posto = posto,
        this.foto = foto
    }

    getMecanicoId(){
        return this.id
    }

    getMecanicoPassword(){
        return this.password
    }

    getMecanicoEmail(){
        return this.email
    }

    getMecanicoNome(){
        return this.nome
    }
    
    getMecanicoEspecialidade(){
        return this.especialidade
    }

    getMecanicoPosto(){
        return this.posto
    }

    getMecanicoFoto(){
        return this.foto
    }
}