import axios from 'axios'
import { Cliente } from "@/models/cliente"

const dataToCliente = (data) => {
    return new Cliente(data.name, data.email, data.phone, data.photo)
}

export const getClienteById = async (id) => {

    var cliente = null
    let response = await axios.get('http://localhost:3000/clients?id=' + id)

    if (response.data.length > 0)
        cliente = dataToCliente(response.data[0])

    return cliente
}