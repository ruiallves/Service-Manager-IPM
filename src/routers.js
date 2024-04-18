import HistoricoMec from './components/HistoricoMec.vue';
import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import NotFound from './components/NotFound.vue';
import MecService from './components/MecService.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/home',
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/', 
    },
    {
        name: 'HistoricoMec',
        component: HistoricoMec,
        path: '/historico',
    },
    {
        name: 'service',
        props: true,
        path: '/service/:mecanicoId/:tarefaId',
        component: MecService
    },
    {
      name: 'NotFound',
      component: NotFound,
      path: '/:pathMatch(.*)*', 
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router