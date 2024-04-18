<template>
    <HeaDer/>

    <main class="main">

        <div class="maintopo">
            <h1 style="font-weight: bold; text-transform: uppercase;">Serviço #{{ tarefa.id }}</h1>
            <router-link to="/home">
                <a>VOLTAR</a>
            </router-link>
        </div>

        <div :class="{ 'butoes': tarefa.estado !== 'A realizar' && tarefa.estado !== 'Realizado parcialmente', 'butoes-flex': tarefa.estado === 'A realizar' || tarefa.estado === 'Realizado parcialmente' || tarefa.estado === 'Realizado' }">


            <div class="butao" style="background-color: #EFECFD; margin-right: 40px;">
                <img src="../assets/icons/151770.png" alt="" style="width: 32px; ">
                <p style="margin-top: 15px; font-weight: 600">{{ tarefa.data }}</p>
            </div>

            <div class="butao" style="background-color: #FFFAE0; margin-right: 40px;">
                <img src="../assets/icons/perfilupt.png" alt="" style="width: 33px; ">
                <p style=" margin-top: 14px; font-weight: 600">{{ cliente.nome }} - {{ cliente.telefone }}</p>
            </div>

            <div class="butao" style="background-color: #DFEFFF; margin-right: 40px;">
                <img src="../assets/icons/40031.png" alt="" style="width: 32px; ">
                <p style=" margin-top: 14px; font-weight: 600">{{ tarefa.estado }}</p>
            </div>

            <div class="butao" style="background-color: #E3FFDF" v-if="tarefa.estado == 'A realizar' || tarefa.estado == 'Realizado parcialmente' || tarefa.estado === 'Realizado'">
                <img src="../assets/icons/edit.png" alt="" style="width: 32px; ">
                <p style=" margin-top: 14px; font-weight: 600">{{ servico.descricao }}</p>
            </div>

        </div>

        <div class="informacao">

            <div class="veiculo">
                
                <h1 style="font-weight: bold;">Informação Do Veiculo</h1>

                <div class="veiculo-info">

                    <img src="../assets/icons/j83932476772.png" alt="" width="250px">

                    <div class="veiculo-desc">

                        <div class="esquerda">
                            <p class="pergunta">MATRICULA</p>
                            <p class="pergunta">MARCA</p>
                            <p class="pergunta">TIPO DE MOTOR</p>
                            <p class="pergunta">CILINDRADA</p>
                            <p class="pergunta">POTENCIA DO CARREGADOR</p>
                            <p class="pergunta">KM EFETUADOS</p>
                        </div>

                        <div class="direita">
                            <p class="resposta">{{ veiculo.matricula }}</p>
                            <p class="resposta">{{ veiculo.marca }}</p>
                            <p class="resposta">{{ veiculo.tipo }}</p>
                            <p class="resposta">{{ veiculo.cilindrada }} cm3</p>
                            <p class="resposta">{{ veiculo.potencia }} W</p>
                            <p class="resposta">{{ veiculo.kms }} km</p>
                        </div>

                    </div>

                </div>

            </div>

            <div class="HistEservico">
                
                <div class="historicoebutao">
                    <h1 style="font-weight: bold;">Historico</h1>
                </div>
                
                <div class="historico" style="padding-bottom: 10px;">

                    <div class="historico-info" v-for="tarefaRealizada in tarefasRealizadas" :key="tarefaRealizada.id">
                        <div class="historico-info-esquerda">
                            <img src="../assets/icons/4436481.png" alt="" style="width: 15px; margin-right: 10px">
                            <div class="tarefas">
                                <h3 style="margin-bottom:5px;">{{ tarefaRealizada.servico.descricao }}</h3>
                                <p style="font-weight: 700;">Mecanico: {{ tarefaRealizada.mecanico.nome }}</p>
                            </div>
                        </div>
                        <div class="historico-info-direito">
                            <p style="font-size: 12px;color: #929292;">{{ tarefaRealizada.conclusao }} </p>
                        </div>
                    </div>
                    
                </div>

                <div class="servicos" v-if="tarefa.estado == 'Programado' || tarefa.estado == 'Suspendida'">

                    <h1>Serviço</h1>

                    <div class="servico">

                        <div class="servico-info">
                            <img src="../assets/icons/menu-icon-24.png" alt="" style="width: 15px;">
                            <div class="tarefas" style="margin-left: 10px">
                                <h3 style="margin-bottom:5px;">{{ servico.descricao }}</h3>
                                <p style="font-weight: 700;">Mecanico: {{ mecanico.nome }}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="servicos" v-if="tarefa.estado == 'A realizar' || tarefa.estado == 'Suspendido'">

                    <h1>Relatório</h1>

                    <div class="relatorio">

                        <div class="">
                            <textarea style="border-radius: 10px;" class="textarea" id="report" rows="6" placeholder="Relatório" v-model="relatorio"></textarea>
                        </div>

                    </div>

                </div>

                <div class="servicos" v-if="tarefa.estado == 'Realizado parcialmente'">
                    
                    <h1 style="font-weight: bold;">Serviços</h1>
                    
                    <div class="servico" style="padding-top: 10px;padding-bottom: 10px;">

                        <input type="text" class="form-control" style="padding-left: 20px; margin-bottom: 5px; width: 90%;margin-bottom: 20px;margin-left: 20px;margin-right: 20px; margin-top: 0px;" placeholder="ADICIONAR SERVIÇOS" v-model="input">
                        
                        <div class="dropdownContent" v-if="getServicosFiltrados.length">
                            <a v-for="servico in getServicosFiltrados" :key="servico.id" @click="adicionarServico(servico)">
                                {{ servico.descricao }}
                            </a>
                        </div>
                        
                        <div v-if="servicosAdicionais.length">
                            <div v-for="servicoAdicionado in servicosAdicionais" :key="servicoAdicionado.id" class="historico-info-esquerda" style="margin-left: 20px; display: flex; justify-content: space-between;">
                                <div style="display: flex; align-items: center;">
                                    <img src="../assets/icons/4436481.png" alt="" style="width: 15px; margin-right: 10px;">
                                    <p style="font-weight: bold;">{{ servicoAdicionado.descricao }}</p>
                                </div>
                                <img src="../assets/icons/860829.png" @click="removerServico(servicoAdicionado)" style="cursor: pointer; width: 20px; margin-right: 25px;">
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <a style="cursor: pointer; background-color: black; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white; position: absolute; right: 0;" @click="iniciarTarefa" v-if="tarefa.estado == 'Programado'">INICIAR SERVIÇO</a>

        <a style="cursor: pointer; background-color: black; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white; position: absolute; right: 0;" @click="iniciarTarefa" v-if="tarefa.estado == 'Suspendida'">RETOMAR</a>

        <div class="susterm" style="display: flex; justify-content: flex-end;">
            <a style="cursor: pointer; background-color: orange; margin-right: 10px; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white" class="" @click="suspenderTarefa" v-if="tarefa.estado == 'A realizar'">SUSPENDER</a>
            <a style="cursor: pointer; background-color: black; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white" class="" @click="submeterRelatorio" v-if="tarefa.estado == 'A realizar'">SUBMETER RELATORIO</a>
        </div>

        <div class="susterm" style="display: flex; justify-content: flex-end;">
            <a style="cursor: pointer; background-color: gray; margin-right: 10px; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white" class="" @click="iniciarTarefa" v-if="tarefa.estado == 'Realizado parcialmente'">RETROCEDER</a>
            <a style="cursor: pointer; background-color: black; padding: 5px 25px; border-radius: 5px; text-decoration: none; color: white" class="" @click="finalizarTarefa" v-if="tarefa.estado == 'Realizado parcialmente'">FINALIZAR</a>
        </div>
    </main>

</template>

<script>
import HeaDer from './HeaDer.vue';
import { getMecanicoById } from '../controllers/mecanicoC';
import { getTarefaById, getTarefasRealizadasByMatricula } from '../controllers/tarefaC';
import { getVeiculoByMatricula } from '../controllers/veiculoC';
import { getClienteById } from '../controllers/clienteC';
import { compareTarefasByData } from '../utils/utils';
import { getServicoById } from '../controllers/servicoC';
import { putTarefa } from '../controllers/tarefaC'
import { getNowDate } from '../utils/utils'
import { getAllServicos } from '../controllers/servicoC';

export default{
    name: 'MecService',
    components: {
        HeaDer
    },
    data(){
        return{
            mecanico: Object,
            tarefa: Object,
            servico: Object,
            cliente: Object,
            veiculo: Object,
            tarefasRealizadas: [],
            servicosAdicionais: [],
            relatorio: '',
            input: '',
            servicos: [],

        }
    },

    mounted(){
        getMecanicoById(this.$route.params.mecanicoId).then(mecanico => {
            this.mecanico = mecanico;
        });

        getTarefaById(this.$route.params.tarefaId)
            .then(tarefa => {
                this.tarefa = tarefa
                this.servico = tarefa.servico
                document.title = 'Tarefa | ' + tarefa.id
                this.setServicosAdicionais()
                getVeiculoByMatricula(tarefa.veiculo)
                    .then(veiculo => {
                        if (veiculo) {
                            this.veiculo = veiculo
                            getClienteById(veiculo.cliente)
                                .then(cliente => this.cliente = cliente)
                            getTarefasRealizadasByMatricula(veiculo.matricula)
                                .then(tarefasRV => this.tarefasRealizadas = tarefasRV.filter(
                                    tarefaRealizada => compareTarefasByData(tarefa,tarefaRealizada)))

                            console.log(this.tarefasRealizadas);
                        } else {
                            console.error('Veículo não encsontrado');
                        }
                    })
            });
        
            
        getAllServicos()
            .then(servicos => this.servicos = servicos)
    },

    methods: {
        setServicosAdicionais(){
            for (const servicoId of this.tarefa.servicosAdicionais){
                getServicoById(servicoId)
                    .then(servico => this.servicosAdicionais.push(servico))
            }
        },
        iniciarTarefa() {
            this.tarefa.estado = 'A realizar';
            this.$emit('updateTarefa', this.tarefa);
            putTarefa(this.tarefa);
            if (this.tarefa.estado === 'Realizado') {
                this.setServicosAdicionais();
            }
        },
        suspenderTarefa(){
            this.tarefa.estado = 'Suspendida';
            this.$emit('updateTarefa', this.tarefa);
            putTarefa(this.tarefa);
        },
        submeterRelatorio(){
            this.tarefa.relatorio = this.relatorio;
            this.tarefa.estado = 'Realizado parcialmente'
            console.log(this.tarefa.relatorio);
            this.$emit('updateTarefa', this.tarefa);
            putTarefa(this.tarefa);
        },
        adicionarServico(servico){
            let temp = this.servicosAdicionais
            if (!temp.map(x => x.descricao).includes(servico.descricao))
                temp.push(servico)
        },
        removerServico(servico){
            let temp = this.servicosAdicionais
            temp.splice(temp.indexOf(servico),1)
        },
        finalizarTarefa(){
            this.tarefa.estado = 'Realizado'
            this.tarefa.conclusao = getNowDate()
            this.tarefa.servicosAdicionais = this.servicosAdicionais.map(servico => servico.id)
            this.$emit('updateTarefa', this.tarefa);
            putTarefa(this.tarefa);
        }
    },

    computed: {

        getServicosFiltrados(){
            let regex = new RegExp(this.input,'i')
            return (this.input.length > 0) ?
                this.servicos.filter(
                    servico => regex.test(servico.descricao)) : []
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

.logos p{
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
}

.logos img{
    margin-left: 15px;
}

.logos {
    display: flex;
    align-items: center;
}

.infos {
    display: flex;
    align-items: center;
}

.infos-posto{
    font-size: 12px;
    margin-right: 20px;
}

.rounded-image {
    border-radius: 10%;
    margin-bottom: 5px;
    margin-right: 5px;
}

.nome-mecanico{
    margin-right: 35px;
    font-size: 12px;
}



.main{
    margin: 0 auto; /* Define margens automáticas para centralizar a main */
    max-width: 1100px; /* Define a largura máxima da main para 800px (ajuste conforme necessário) */
    position: relative;
}

.main h1{
    font-size: 26px;
    margin-left: 25px;
}

.maintopo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
}

.maintopo a{
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 5px 20px;
    border-radius: 5px;
}

.butoes {
    display: flex;
    margin-top: 40px;
}

.butao {
    width: 240px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 30px;
}

.informacao {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.veiculo {
    display: flex;
    flex-direction: column;
}

.veiculo-info {
    background-color: #F9F9FB;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    margin-top: 5px;
}

.veiculo-info img {
    margin-top: 20px; 
}
.veiculo-desc {
    margin: 0 auto; 
    width: 400px;
    display: flex;
    margin-bottom: 20px;
}


.pergunta {
    color: #929292;
    text-align: center;
    margin-bottom: 7px;
    font-weight: 500;
}

.resposta {
    text-align: center;
    margin-bottom: 7px;
    font-weight: bold;
}

.direita {
    margin-left: 40px;
}

.historicoebutao{
    display: flex;
    align-items: center;
}

.historicoebutao a{
    text-decoration: none;
    color: white;
    background-color: black;
    margin-left: 20px;
    padding: 3px 15px;
    border-radius: 5px;
}

.historico{
    background-color: #F9F9FB;
    width: 450px;
    border-radius: 30px;
    min-height: 240px;
    margin-top: 5px;
}

.tarefas h3{
    font-size: 15px;
    font-weight: bold;
}

.tarefas p {
    color: #929292;
    font-size: 12px;
}

.historico-info {
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-left: 20px;
    align-items: center;
    margin-bottom: 11px;
}

.historico-info-esquerda{
    margin-top: 26px;
    display: flex;
    align-items: center;
}

.historico-info-direitinformacaoo {
    margin-top: 10px;
    align-items: center;
}


.servicos {
    margin-top: 15px;
}

.servico {
    background-color: #F9F9FB;
    background-color: #F9F9FB;
    width: 450px;
    border-radius: 30px;
    min-height: 85px;
    margin-top: 5px;
}

.servico-info {
    display: flex;
    width: 400px;
    margin-left: 20px;
    align-items: center;
    padding-top: 20px;
}

.iniciar {
    position: absolute;
    bottom: -70px; /* Ajuste conforme necessário para o espaço entre o botão e o final da main */
    right: 0px; /* Ajuste conforme necessário para o espaço entre o botão e a margem direita da main */
    text-decoration: none;
    color: white;
    background-color: black;
    margin-left: 20px;
    padding: 5px 15px;
    border-radius: 5px;
}

.textarea{
    width: 90%;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    padding: 5px;
    height: 70px;
    resize: none;
}

.relatorio{
    background-color: #F9F9FB;
    background-color: #F9F9FB;
    width: 450px;
    border-radius: 30px;
    min-height: 85px;
    height: 110px;
    margin-top: 5px;
}

.dropdownContent {
    background-color: white;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
    text-align: left;
    max-height: 102px;
    overflow: scroll;

}

.dropdownContent a {
    color: black;
    padding: 5px 20px;
    text-decoration: none;
    cursor: pointer;
    display: block;
}

.dropdownContent a:hover {
    background-color: var(--greyssmot);
    border-radius: 10px;
}

.butoes-flex {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
}

</style>