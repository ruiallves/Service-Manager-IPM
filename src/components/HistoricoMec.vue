<template style>
    <HeaDer/>
    
    <div style="margin-top: 20px; margin-left: 100px; margin-right: 100px;">
        <h3 style="text-align: center; font-weight: bold;">Historico De Serviços Realizados</h3>

        <!-- filtros aqui -->
         <!-- Filtros -->
         <div class="filters" style="margin-top: 50px;">
            <div class="rowFilters">
                <div class="filter" @click="toggleDropdown('tipo')" :class="{ 'active': showDropdown && selectedFilter === 'tipo' }">
                    Tipo
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'tipo' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('serviço')" :class="{ 'active': showDropdown && selectedFilter === 'serviço' }">
                    Serviço
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'serviço' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('duração')" :class="{ 'active': showDropdown && selectedFilter === 'duração' }">
                    Duração
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'duração' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('data_limite')" :class="{ 'active': showDropdown && selectedFilter === 'data_limite' }">
                    Data Limite
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'data_limite' }"></span>
                </div>
                <div class="filter" @click="toggleDropdown('estado')" :class="{ 'active': showDropdown && selectedFilter === 'estado' }">
                    Estado
                    <span class="arrow" :class="{ 'up': showDropdown && selectedFilter === 'estado' }"></span>
                </div>
            </div>
        </div>
        
        <div :class="{'dropdown.show': showDropdown, 'dropdown': !showDropdown}" v-if="showDropdown">
            <div v-if="selectedFilter === 'tipo'">
                <div class="options">
                    <label @click="selectOption('Universal')">
                        Universal
                        <input type="checkbox" name="Universal">
                    </label>
                    <label @click="selectOption('Eletrico')">
                        Eletrico
                        <input type="checkbox" name="Eletrico">
                    </label>
                    <label @click="selectOption('Combustão')">
                        Combustão
                        <input type="checkbox" name="Combustão">
                    </label>
                </div>
            </div>
            <div v-if="selectedFilter === 'serviço'" class="options service-grid">
                <label @click="selectOption('Substituir_pneus')">
                    Substituir pneus
                    <input type="checkbox" name="Substituir_pneus">
                </label>
                <label @click="selectOption('Calibrar_rodas')">
                    Calibrar rodas
                    <input type="checkbox" name="Calibrar_rodas">
                </label>
                <label @click="selectOption('Alinhar_direção')">
                    Alinhar direção
                    <input type="checkbox" name="Alinhar_direção">
                </label>
                <label @click="selectOption('Substituir_calços_travões')">
                    Substituir calços travões
                    <input type="checkbox" name="Substituir_calços_travões">
                </label>
                <label @click="selectOption('Mudar_óleo_travões')">
                    Mudar óleo travões
                    <input type="checkbox" name="Mudar_óleo_travões">
                </label>
                <label @click="selectOption('Limpeza_interior')">
                    Limpeza interior
                    <input type="checkbox" name="Limpeza_interior">
                </label>
                <label @click="selectOption('Limpeza_exterior')">
                    Limpeza exterior
                    <input type="checkbox" name="Limpeza_exterior">
                </label>
                <label @click="selectOption('Substituir_filtro_ar_habitáculo')">
                    Substituir filtro ar habitáculo
                    <input type="checkbox" name="Substituir_filtro_ar_habitáculo">
                </label>
                <label @click="selectOption('Mudar_óleo_motor')">
                    Mudar óleo motor
                    <input type="checkbox" name="Mudar_óleo_motor">
                </label>
                <label @click="selectOption('Substituir_filtro_óleo')">
                    Substituir filtro óleo
                    <input type="checkbox" name="Substituir_filtro_óleo">
                </label>
                <label @click="selectOption('Substituir_filtro_combustível')">
                    Substituir filtro combustível
                    <input type="checkbox" name="Substituir_filtro_combustível">
                </label>
                <label @click="selectOption('Substituir_filtro_ar_motor')">
                    Substituir filtro ar motor
                    <input type="checkbox" name="Substituir_filtro_ar_motor">
                </label>
                <label @click="selectOption('Substituir_conversor_catalítico')">
                    Substituir conversor catalítico
                    <input type="checkbox" name="Substituir_conversor_catalítico">
                </label>
                <label @click="selectOption('Substituir_bateria_de_arranque')">
                    Substituir bateria de arranque
                    <input type="checkbox" name="Substituir_bateria_de_arranque">
                </label>
                <label @click="selectOption('Substituir_velas_de_incandescência')">
                    Substituir velas de incandescência
                    <input type="checkbox" name="Substituir_velas_de_incandescência">
                </label>
                <label @click="selectOption('Substituir_filtro_de_partículas')">
                    Substituir filtro de partículas
                    <input type="checkbox" name="Substituir_filtro_de_partículas">
                </label>
                <label @click="selectOption('Regenerar_filtro_de_partículas')">
                    Regenerar filtro de partículas
                    <input type="checkbox" name="Regenerar_filtro_de_partículas">
                </label>
                <label @click="selectOption('Substituir_válvula_do_acelerador')">
                    Substituir válvula do acelerador
                    <input type="checkbox" name="Substituir_válvula_do_acelerador">
                </label>
                <label @click="selectOption('Substituir_velas_de_ignição')">
                    Substituir velas de ignição
                    <input type="checkbox" name="Substituir_velas_de_ignição">
                </label>
                <label @click="selectOption('Avaliar_desempenho_da_bateria')">
                    Avaliar desempenho da bateria
                    <input type="checkbox" name="Avaliar_desempenho_da_bateria">
                </label>
                <label @click="selectOption('Substituir_bateria')">
                    Substituir bateria
                    <input type="checkbox" name="Substituir_bateria">
                </label>
            </div>

            <div v-if="selectedFilter === 'duração'" class="options">
                <label @click="selectOption('menos30min_dur')">
                    Menos de 30 minutos
                    <input type="checkbox" name="menos30min_dur">
                </label>
                <label @click="selectOption('menos60min_dur')">
                    Menos de 60 minutos
                    <input type="checkbox" name="menos60min_dur">
                </label>
                <label @click="selectOption('menos120min_dur')">
                    Menos de 120 minutos
                    <input type="checkbox" name="menos120min_dur">
                </label>
            </div>
            <div v-if="selectedFilter === 'data_limite'" class="options">
                <label @click="selectOption('menos1hora_limite')">
                    Menos de 1 hora
                    <input type="checkbox" name="menos1horas_limite">
                </label>
                <label @click="selectOption('3hora_limite')">
                    Menos de 3 horas
                    <input type="checkbox" name="3horas_limite">
                </label>
                <label @click="selectOption('12hora_limite')">
                    Menos de 12 horas
                    <input type="checkbox" name="12horas_limite">
                </label>
                <label @click="selectOption('24hora_limite')">
                    Menos de 24 horas
                    <input type="checkbox" name="24horas_limite">
                </label>
                <label @click="selectOption('semprazo_limite')">
                    Sem Prazo
                    <input type="checkbox" name="semprazo_limite">
                </label> 
            </div>
            <div v-if="selectedFilter === 'estado'" class="options">
                <label @click="selectOption('por_realizar')">
                    Por realizar
                    <input type="checkbox" name="por_realizar">
                </label> 
                <label @click="selectOption('suspenso')">
                    Suspenso
                    <input type="checkbox" name="suspenso">
                </label> 
                <label @click="selectOption('concluido')">
                    Concluido
                    <input type="checkbox" name="concluido">
                </label> 
            </div>
        </div>

        <div class="tbl-header" style="margin-top: 20px;">
            <table style="border-bottom: 1px solid black; background-color: rgb(248, 248, 248);" cellpadding="0" cellspacing="0" border="0">
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
</template>

<script>
import { getAllTarefaMecanico } from '../controllers/tarefaC';
import { getMecanicoByEmail } from '../controllers/mecanicoC';
import HeaDer from './HeaDer.vue';
    export default {
        name: 'HistoricoMec',
        components: {
            HeaDer
        },
        async mounted(){
            let user = localStorage.getItem('user');
            if (!user) {
                this.$router.push({ name: 'LogIn' });
            }

            const mecanico = await getMecanicoByEmail(JSON.parse(user).email); 
            this.tarefas = await getAllTarefaMecanico(mecanico.id);
            this.tarefasFiltradas = this.tarefas;
        },
        data() {
            return {
                showDropdown: false,
                selectedFilter: "",
                tarefas: [],
            };
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
            selectOption(option) {
                console.log(`Opção selecionada: ${option}`);
            }
        },
        computed: {
            tarefasFiltradas() {
                return this.tarefas.filter(tarefa => tarefa.estado == 'Realizado');
            }
        },
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

    label{
        margin-top: 10px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        text-align: center;
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


</style>