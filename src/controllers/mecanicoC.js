import { Mecanico } from "@/models/mecanico"
import axios from 'axios'

const dataToMecanico = (data) => {
    return new Mecanico(data.id, data.email, data.password, data.name, data.specialty, data.post, data.photo)
}

export const getMecanicoByEmail = async (email) => {

    var mecanico = null
    let response = await axios.get('http://localhost:3000/mechanicals?email=' + email)

    if (response.data.length > 0)
        mecanico = dataToMecanico(response.data[0])

    return mecanico
}


export const getMecanicoById = async (id) => {

    var mecanico = null
    let response = await axios.get('http://localhost:3000/mechanicals?id=' + id)

    if (response.data.length > 0)
        mecanico = dataToMecanico(response.data[0])

    return mecanico
}