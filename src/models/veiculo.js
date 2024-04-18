export class Veiculo{


    constructor(matricula,tipo,potencia,kms,marca,cliente,cilindrada='NA'){
        this.matricula = matricula
        this.tipo = tipo
        this.potencia = potencia
        this.kms = kms
        this.marca = marca
        this.cliente = cliente
        this.cilindrada = cilindrada
    }


    getMatricula(){
        return this.matricula
    }


    getTipo(){
        return this.tipo
    }


    getCilindrada(){
        return this.cilindrada
    }


    getPotencia(){
        return this.potencia
    }


    getKms(){
        return this.kms
    }


    getMarca(){
        return this.marca
    }


    getCliente(){
        return this.cliente
    }
}