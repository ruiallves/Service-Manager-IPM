<template>
    <div style="margin-top: 20px; margin-left: 100px; margin-right: 100px;">
        <h3 style="text-align: center; font-weight: bold;">Serviços Atribuidos</h3>

        <!-- Filtros -->
        <div class="filters" style="margin-top: 50px; margin-bottom: 20px;">
            <div class="rowFilters">
                <div class="filter" @click="toggleDropdown('tipo')"
                    :class="{ 'active': showDropdown && selectedFilter === 'tipo' }">
                    Tipo
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'tipo' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('serviço')"
                    :class="{ 'active': showDropdown && selectedFilter === 'serviço' }">
                    Serviço
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'serviço' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('duração')"
                    :class="{ 'active': showDropdown && selectedFilter === 'duração' }">
                    Duração
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'duração' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('data_limite')"
                    :class="{ 'active': showDropdown && selectedFilter === 'data_limite' }">
                    Data Limite
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'data_limite' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('estado')"
                    :class="{ 'active': showDropdown && selectedFilter === 'estado' }">
                    Estado
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'estado' }"></span>
                </div>

                <div @click="restaurarFiltros">
                    <img src="../assets/icons/2618245.png" style="width: 20px; cursor: pointer;">
                </div>
            </div>
        </div>

        <div :class="{ 'dropdown.show': showDropdown, 'dropdown': !showDropdown }" v-if="showDropdown">
            <div v-if="selectedFilter === 'tipo'">
                <div class="options">
                    <label style="margin-right: 20px;">
                        Hibrido
                        <input type="checkbox" name="Hibrido" id="hibrido" value="Hibrido" v-model="filtro.tipo" @change="filtrarTarefas">
                    </label>
                    <label style="margin-right: 20px;">
                        Eletrico
                        <input type="checkbox" name="Eletrico" id="eletrico" value="Eletrico" v-model="filtro.tipo" @change="filtrarTarefas">
                    </label>
                    <label style="margin-right: 20px;">
                        Gasolina
                        <input type="checkbox" name="Gasolina" value="Gasolina" v-model="filtro.tipo" @change="filtrarTarefas">
                    </label>
                    <label style="margin-right: 20px;">
                        Gasoleo
                        <input type="checkbox" name="Gasóleo" value="Gasoleo" v-model="filtro.tipo" @change="filtrarTarefas">
                    </label>
                </div>
            </div>
            <div v-if="selectedFilter === 'serviço'" class="options service-grid">
                <label>
                    Substituir pneus
                    <input type="checkbox" name="Substituir pneus" value="Substituir pneus" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Calibrar rodas
                    <input type="checkbox" name="Calibrar_rodas" value="Calibrar rodas" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Alinhar direção
                    <input type="checkbox" name="Alinhar_direção" value="Alinhar direção" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir calços
                    <input type="checkbox" name="Substituir_calços_travões" value="Substituir calços" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Mudar óleo travões
                    <input type="checkbox" name="Mudar_óleo_travões" value="Mudar óleo travões" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Limpeza interior
                    <input type="checkbox" name="Limpeza_interior" value="Limpeza interior" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Limpeza exterior
                    <input type="checkbox" name="Limpeza_exterior" value="Limpeza exterior" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir filtro ar
                    <input type="checkbox" name="Substituir_filtro_ar_habitáculo" value="Substituir filtro ar" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Mudar óleo motor
                    <input type="checkbox" name="Mudar_óleo_motor" value="Mudar óleo motor" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir filtro óleo
                    <input type="checkbox" name="Substituir_filtro_óleo" value="Substituir filtro óleo" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir filtro combustível
                    <input type="checkbox" name="Substituir_filtro_combustível" value="Substituir filtro combustível" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir conversor
                    <input type="checkbox" name="Substituir_conversor" value="Substituir conversor" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir bateria
                    <input type="checkbox" name="Substituir_bateria_de_arranque" value="Substituir bateria" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir velas
                    <input type="checkbox" name="Substituir_velas_de_incandescência" value="Substituir velas" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir filtro de partículas
                    <input type="checkbox" name="Substituir_filtro_de_partículas" value="Substituir filtro de partículas" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Regenerar filtro de partículas
                    <input type="checkbox" name="Regenerar_filtro_de_partículas" value="Regenerar filtro de partículas" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir válvula
                    <input type="checkbox" name="Substituir_válvula_do_acelerador" value="Substituir válvula" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Avaliar desempenho
                    <input type="checkbox" name="Avaliar_desempenho_da_bateria" value="Avaliar desempenho" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
                <label>
                    Substituir filtro da água
                    <input type="checkbox" name="Substituir filtro da água" value="Substituir filtro da água" v-model="filtro.servico" @change="filtrarTarefas">
                </label>
            </div>


            <div v-if="selectedFilter === 'duração'" class="options">
                <div class="content">
                    <div class="element">
                        <input style="margin-top: 15px;" type="number" class="form-control" placeholder="Até" v-model="filtro.duracao" @change="filtrarTarefas">
                    </div>
                </div>
            </div>

            <div v-if="selectedFilter === 'data_limite'" class="options">
                <div class="content">
                    <div class="element">
                        <input style="margin-top: 15px;" type="date" class="form-control" v-model="filtro.dataLimite" @change="filtrarTarefas">
                    </div>
                </div>
            </div>
            <div v-if="selectedFilter === 'estado'" class="options">
                <label style="margin-right: 20px;">
                    Programado
                    <input type="checkbox" name="Programado" value="Programado" v-model="filtro.estado" @change="filtrarTarefas">
                </label>
                <label style="margin-right: 20px;">
                    Suspendida
                    <input type="checkbox" name="Suspendida" value="Suspendida" v-model="filtro.estado" @change="filtrarTarefas">
                </label>
                <label style="margin-right: 20px;">
                    A realizar
                    <input type="checkbox" name="A realizar" value="A realizar" v-model="filtro.estado" @change="filtrarTarefas">
                </label>
                <label style="margin-right: 20px;">
                    Realizado Parcialmente
                    <input type="checkbox" name="Realizado parcialmente" value="Realizado parcialmente" v-model="filtro.estado" @change="filtrarTarefas">
                </label>
            </div>
        </div>

        <div class="" v-if="tarefas.length">
            <div class="tbl-header" style="margin-top: 20px;">
                <table style="border-bottom: 1px solid black; background-color: rgb(248, 248, 248);" cellpadding="0"
                    cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>TIPO</th>
                            <th>SERVIÇO</th>
                            <th>DURAÇÃO</th>
                            <th>DATA LIMITE</th>
                            <th>ESTADO</th>
                            <th>OPÇÕES</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content" style="margin-top: 0;">
                <table style="border-bottom: 1px solid black;" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="tarefa in tarefasFiltradas" :key="tarefa.id">
                            <td>{{ tarefa.servico.tipo }}</td>
                            <td>{{ tarefa.servico.descricao }}</td>
                            <td id="remove">{{ tarefa.servico.duracao }} min</td>
                            <td id="remove">{{ tarefa.data }}</td>
                            <td>{{ tarefa.estado }}</td>
                            <td>
                                <router-link :to="'/service/' + tarefa.mecanico + '/' + tarefa.id">
                                    <img style="margin-left: 15px;" width="22" src="@/assets/icons/arrow-right-circle-icon-512x512-2p1e2aaw.png">
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="!tarefas.length" style="margin-top: 50px;">
            <h7 style="text-align: center; color: gray">Sem serviços atribuidos....</h7>
        </div>

    </div>
</template>

<script>
import { getAllTarefaMecanico } from '../controllers/tarefaC';
import { getMecanicoByEmail } from '../controllers/mecanicoC';
// import { filterApply } from '../utils/utils';
import { checkTarefa } from '../utils/utils';


export default {
    name: 'MecTable',
    data() {
        return {
            showDropdown: false,
            selectedFilter: "",
            tarefas: [],
            tarefasFiltradas: [],
            filtro: {
                tipo: [],
                servico: [],
                duracao: '',
                estado: [],
                dataLimite: ''
            }
        };
    },

    async mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({ name: 'LogIn' });
        }
        
        const mecanico = await getMecanicoByEmail(JSON.parse(user).email); 
        this.tarefas = await getAllTarefaMecanico(mecanico.id);
        this.tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.estado !== 'Realizado');
    },

    methods: {
        toggleDropdown(filter) {
            if (this.selectedFilter === filter) {
                this.showDropdown = !this.showDropdown;
            } else {
                this.showDropdown = true;
            }
            this.selectedFilter = filter;
        },
        filtrarTarefas() {
            this.tarefasFiltradas = this.tarefas.filter(tarefa => {
                return checkTarefa(tarefa, this.filtro) && tarefa.estado !== 'Realizado';
            });
        },
        restaurarFiltros(){
            this.filtro = {
                tipo: [],
                servico: [],
                duracao: '',
                estado: [],
                dataLimite: ''
            }
            this.tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.estado !== 'Realizado');
        }
    }
}
</script>

<style scoped>
    
    h1{
        font-size: 30px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        text-align: center;
        margin-bottom: 15px;
    }
    table{
        width:100%;
        table-layout: fixed;
    }
    .tbl-header{
        background-color: rgba(255,255,255,0.3);
    }
    .tbl-content{
        height:300px;
        overflow-x:auto;
        border: 2px solid rgba(255,255,255,0.3);
    }
    th{
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        color: #0e0e0e;
        text-transform: uppercase;
    }
    td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 300;
    font-size: 12px;
    color: #1d1d1d;
    }
    
    tr{
        border-bottom: solid 1px black; 
    }


    /* demo styles */

    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
    body{

    font-family: 'Roboto', sans-serif;
    }
    section{
        margin: 50px;
    }

    /* for custom scrollbar for webkit browser*/

    ::-webkit-scrollbar {
        width: 6px;
    } 
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }

    .filters{
        display: flex;
        margin-top: 20px;
        align-items: center;
        text-align: center;
    }

    .rowFilters{
        display: flex;
        align-items: center;
        text-align: center;
    }

    .filter{
        border: 1px solid black;
        border-radius: 10px;
        padding: 7px;
        margin-right: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .dropdown {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    }

    .dropdown.show {
        display: block;
    }

    .options{
        display: flex;
        color: black;
    }

    input{
        margin-left: 5px;
    }

    .arrow {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid black;
        margin-left: 5px;
        transition: transform 0.3s ease;
    }

    .arrow.up {
        transform: rotate(180deg);
    }

    .service-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 20px;
    }

    .service-grid label {
        display: block;
        margin-bottom: 10px;
    }

    .element{
        padding-left: 0px;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .options label {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        justify-content: space-between;
    }

    .options input {
        margin-right: 5px;
    }

</style>