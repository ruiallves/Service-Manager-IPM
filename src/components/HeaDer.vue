<template>
    <nav class="nav">
        <div class="logos" style="margin-left: 60px;">
            <router-link to="/home">
                <img src="../../public/logo-color-removebg-preview.png" alt="" style="width: 150px">
            </router-link>
        </div>

        <div class="infos">
            <img :src="foto" alt="" style="width: 55px; border-radius: 10%">
            <div class="nome-mecanico">
                <p>{{ nome }}</p>
                <h1>{{ especialidade }}</h1>
            </div>
            <router-link to="/historico">
                <img src="../../public/3201871-200.png" alt="" style="width: 20px; margin-right: 20px;">
            </router-link>
            <img v-on:click="logout" src="../../public/3596149.png" alt="" style="width: 20px; margin-right: 60px; cursor: pointer;">
        </div>
    </nav>
</template>

<script>
import { getMecanicoByEmail } from "../controllers/mecanicoC";
export default {
    name: 'HeaDer',
    data() {
        return {
            nome: '',
            especialidade: '',
            foto: ''
        }
    },
    async mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({ name: 'LogIn' });
            return;
        }

        const mecanicoEmail = JSON.parse(user).email;
        const mecanico = await getMecanicoByEmail(mecanicoEmail);

        if (mecanico) {
            this.nome = mecanico.getMecanicoNome();
            this.especialidade = mecanico.getMecanicoEspecialidade();
            this.foto = require(`../${mecanico.getMecanicoFoto()}`);
        }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({ name: 'LogIn' });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

.nav{
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    background-color: rgb(248, 248, 248);
}

.logos{
    display: flex;
    align-items: center;
}

.logos p{
    font-weight: bold;
    margin-left: 100px;
}

.infos{
    display: flex;
    align-items: center;
}

.infos p{
    font-size: 12px;
    margin-right: 35px;
    font-weight: 600;
}

.infos img{
    margin-bottom: 5px;
}

.nome-mecanico{
    margin-left: 7px;
}

.nome-mecanico h1{
    font-size: 10px;
    margin-top: 3px;
}
</style>