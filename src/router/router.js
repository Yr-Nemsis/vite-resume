import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../views/index.vue"
import Home from "../views/home.vue"

const routes = [
    {
        path: '/',
        component: Index,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: Home,
                name: "Home"
            }
            ]
    }
]

const router  = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router