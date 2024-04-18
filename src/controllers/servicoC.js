import { Servico } from "@/models/servico"
import axios from 'axios'

const dataToServico = (data) => {
    return new Servico(data.id, data.description, data.duration, data.type)
}

const getServicoTipo = async (id) => {

    let result = 'NA'
    let response = await axios.get('http://localhost:3000/types')

    response.data.forEach(tipo => {
        if (tipo.services.includes(id))
            result = tipo.id 
    });

    return result
}

export const getServicoById = async (id) => {

    let servico = null
    let response = await axios.get('http://localhost:3000/services?id=' + id)

    if (response.data.length > 0){
        let content = response.data[0]
        content['type'] = await getServicoTipo(id)
        servico = dataToServico(content)
    }

    return servico
}

export const getAllServicos = async () => {

    let servicos = []
    let response = await axios.get('http://localhost:3000/services')

    for (const servico of response.data){
        servicos.push(dataToServico(servico))
    }

    return servicos
}

