import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/other',
        name: 'Other',
        component: HelloWorld,
    },
]
const router = new Router({
    routes,
    mode: 'history',
});
console.log({ router })

export default router