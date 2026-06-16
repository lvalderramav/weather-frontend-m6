import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/detalle/:id",
        name: "detalle",
        component: DetailView,
        props: true, // Permite traspasar el :id dinámico como Prop
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
