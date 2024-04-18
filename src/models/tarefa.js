export class Tarefa{


    constructor(id,veiculo,servico,mecanico,estado,agendamento,descricao,data='Sem prazo',conclusao="ND",relatorio='ND',servicosAdicionais=[]){
        this.id = id
        this.veiculo = veiculo
        this.servico = servico
        this.mecanico = mecanico
        this.estado = estado
        this.agendamento = agendamento
        this.descricao = descricao
        this.data = data
        this.conclusao = conclusao
        this.relatorio = relatorio
        this.servicosAdicionais = servicosAdicionais
    }


    getId(){
        return this.id
    }


    getVeiculo(){
        return this.veiculo
    }


    getServico(){
        return this.servico
    }


    getMecanico(){
        return this.mecanico
    }


    getEstado(){
        return this.estado
    }


    getAgendamento(){
        return this.estado
    }


    getDescricao(){
        return this.descricao
    }


    getData(){
        return this.data
    }


    getConclusao(){
        return this.conclusao
    }


    getRelatorio(){
        return this.relatorio
    }

    
    getServicosAdicionais(){
        return this.servicosAdicionais
    }
}