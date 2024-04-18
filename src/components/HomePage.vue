<template style>
    <HeaDer/>
    <MecTable />
</template>

<script>
import HeaDer from './HeaDer.vue';
import MecTable from './MecTable.vue';


    export default {
        name: 'HomePage',
        components: {
            HeaDer,
            MecTable
        },
        mounted(){
            let user = localStorage.getItem('user');
            if (!user) {
                this.$router.push({ name: 'LogIn' });
            }
        },
        data(){
            return {
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

</style>