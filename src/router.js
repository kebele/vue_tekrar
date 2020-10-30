

// import VueRouter from 'vue-router'
import { createRouter, createWebHistory} from 'vue-router'
import DcHeroes from './pages/DcHeroes.vue'
import Calendar from './pages/Calendar.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/dc-heroes', component: DcHeroes },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

// adres satırındaki # işaretinin kalkması için createwebhashHistory değil createWebHistory kullanmalıyız, 
export default router;