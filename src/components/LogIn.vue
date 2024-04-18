<template>
    <div class="row-my">
        <div class="col-sm-7 px-0 d-none d-sm-block">
            <img src="../../public/GettyImages-1157181664-2400x1440.jpg"
                 alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
        </div>

        <div class="col-sm-5 text-black">
            <img src="../../public/logo-color-removebg-preview.png" class="px-6 margin-my" style="width: 25%; margin-top: 30px;" />

            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 mt-xl-n5 col">
                
                <form style="width: 30rem;">
                        <div v-if="error" class="alert alert-danger" role="alert" style="display: flex; justify-content: space-between;">
                            <span>{{ errorMessage }}</span>
                            <button type="button" class="btn btn-danger btn-sm close-alert" @click="error = false" aria-label="Close">X</button>
                        </div>
                    <div class="mb-5 mt-5">
                        <h2 class="mb-2 pb-3" style="letter-spacing: 1px; font-weight:bold;">Sign In</h2>
                        <h6 class="fw-bold" style="color: #9FA5AB;font-size: 10px;font-family: Verdana, Geneva, Tahoma, sans-serif">Insira o seu email e password para aceder à plataforma.</h6>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label fw-bold" for="login">Email</label>
                        <input type="text" v-model="email" style="border: 2px solid black" class="form-control form-control-lg" placeholder="Insira o seu Email" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label fw-bold" for="senha">Password</label>
                        <input type="password" v-model="password" style="border:2px solid black" class="form-control form-control-lg" placeholder="Insira a sua Password" />
                    </div>

                    <div class="pt-1" style="margin-bottom:30px;margin-top:30px;">
                        <button v-on:click.prevent="login" class="btn btn-dark btn-block w-100" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data(){
        return{
            email: '',
            password: '',
            error: false,
            errorMessage: ''
        }
    },
    methods:{
        async login() {
            if(this.email === '' || this.password === ''){
                this.error = true;
                this.errorMessage = "Por favor, preencha todos os campos.";
                return;
            }
            try {
                let response = await axios.get(
                    `http://localhost:3000/mechanicals?email=${this.email}&password=${this.password}`
                );

                if (response.data.length === 0) {
                    this.error = true;
                    this.errorMessage = "Email ou Password invalidos! Tente novamente.";
                } else {
                    console.warn(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data[0]));
                    this.$router.push({ name: 'HomePage' });
                }
            } catch (error) {
                console.error("Erro ao fazer a requisição:", error);
                this.error = true;
                this.errorMessage = "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.";
            }
        }
    }
}
</script>

<style scoped>
    body, html{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .bg-image-vertical {
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: right center;
        background-size: auto 100%;
    }

    .row-my{
        display:flex;
    }

    .margin-my{
        margin-left: 70px;
        margin-top: 15px;
        margin-bottom: 50px;
    }
</style>
