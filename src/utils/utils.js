export const stringToDateTime = (dateTime) => {
    let time = dateTime.split(' ')[0].split(':')
    let date = dateTime.split(' ')[1].split('/')
    time[1] = time[1].slice(0,-1)
    return new Date(
        Number(date[2]),
        Number(date[1])-1,
        Number(date[0]),
        Number(time[0]),
        Number(time[1]))
}


export const compareTarefasByData = (tarefa,tarefaRealizada) => {
    if (tarefa.estado != 'Realizado')
        return tarefa.id != tarefaRealizada.id
    return tarefa.id != tarefaRealizada.id && 
        stringToDateTime(tarefaRealizada.conclusao) <= stringToDateTime(tarefa.conclusao) 
}

export const getNowDate = () => {
    let now = new Date
    let hours = now.getHours() + ':' + now.getMinutes() + 'h'
    let date = now.getDay() + '/' + now.getMonth() + '/' + now.getFullYear()
    return hours + ' ' + date 
}

const filterTipo = (tarefa,filtro) => {
    return filtro.tipo.includes(tarefa.servico.tipo)
}


const filterServico = (tarefa,filtro) => {
    return filtro.servico.includes(tarefa.servico.descricao)
}


const filterDuracao = (tarefa,filtro) => {
    return tarefa.servico.duracao <= filtro.duracao
}


const filterEstado = (tarefa,filtro) => {
    return filtro.estado.includes(tarefa.estado)
}


const filterData = (tarefa,filtro) => {
    if (tarefa.data == 'Sem prazo') return true
    return stringToDateTime(tarefa.data) <= new Date(filtro.dataLimite)
}

export const checkTarefa = (tarefa, filtro) => {
    let valid = true;
    console.log(filtro)
    console.log(filtro.duracao)
    console.log(filtro.duracao.length)
    if (filtro.duracao > 0 && valid)
        valid = filterDuracao(tarefa, filtro);


    if (filtro.tipo && filtro.tipo.length > 0 && valid)
        valid = filterTipo(tarefa, filtro);

    if (filtro.servico && filtro.servico.length > 0 && valid)
        valid = filterServico(tarefa, filtro);

    if (filtro.estado && filtro.estado.length > 0 && valid)
        valid = filterEstado(tarefa, filtro);

    if (filtro.dataLimite && filtro.dataLimite.length > 0 && valid)
        valid = filterData(tarefa, filtro);

    return valid;
};


export const filterApply = (tarefas,filtro) => {
    console.log(tarefas)
    console.log(filtro)
    return tarefas.filter(tarefa => checkTarefa(tarefa,filtro))
}