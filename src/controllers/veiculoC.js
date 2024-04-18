import { Veiculo } from "@/models/veiculo"
import axios from 'axios'

const dataToVeiculo = (data) => {
    return new Veiculo(data.id, data.type, data.power, data.kms, data.brand, data.clientId, data.cylinder)
}

export const getVeiculoByMatricula = async (matricula) => {

    var veiculo = null
    let response = await axios.get('http://localhost:3000/vehicles?id=' + matricula)
    if (response.data.length > 0)
        veiculo = dataToVeiculo(response.data[0])

    return veiculo
}
