import axios from 'axios'
import { Tarefa } from '@/models/tarefa'
import { getServicoById } from './servicoC'
import { getMecanicoById } from './mecanicoC'


const convertToTarefa = (data) => {
    return new Tarefa(
        data.id,
        data.vehicleId,
        data.service,
        data.mechanical,
        data.state,
        data.scheduling,
        data.description,
        data.date,
        data.conclusion,
        data.report,
        data.additionalServices)
}


export const getTarefaById = async (id) => {

    var tarefa = null
    let response = await axios.get('http://localhost:3000/shcedule?id=' + id)

    if (response.data.length > 0){
        let content = response.data[0]
        console.log(content)
        content['service'] = await getServicoById(content.servicedefinitionId)
        tarefa = convertToTarefa(content)
    }

    return tarefa
}


export const getAllTarefaMecanico = async (mecanico) => {

    var tarefas = []
    let response = await axios.get('http://localhost:3000/shcedule?mechanical=' + mecanico)

    for (const tarefa of response.data){
        tarefas.push(await getTarefaById(tarefa.id))
    }

    return tarefas
}


export const getTarefasRealizadasByMatricula = async (matricula) => {

    const tarefas = []
    let response = await axios.get('http://localhost:3000/shcedule?state=Realizado&vehicleId=' + matricula)

    for (const tarefa of response.data){
        let temp = await getTarefaById(tarefa.id)
        temp.mecanico = await getMecanicoById(temp.mecanico)
        tarefas.push(temp)
    }

    return tarefas
}


export const putTarefa = async (tarefa) => {

    axios.put('http://localhost:3000/shcedule/' + tarefa.id, {
        id: tarefa.id,
        vehicleId: tarefa.veiculo,
        servicedefinitionId: tarefa.servico.id,
        state: tarefa.estado,
        scheduling: tarefa.agendamento,
        date: tarefa.data,
        description: tarefa.descricao,
        mechanical: tarefa.mecanico,
        conclusion: tarefa.conclusao,
        report: tarefa.relatorio,
        additionalServices: tarefa.servicosAdicionais})
}