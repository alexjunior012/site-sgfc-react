import Home from "../views/Home/Home";
import Sobre from "../views/Sobre/Sobre";
import Times from "../views/Times/Times";
import Galerias from "../views/Galerias/Galerias";
import Noticias from "../views/Noticias/Noticias";
import Contatos from "../views/Contatos/Contatos";

const routes = [
    {
        path: "/",
        name: "Home",
        icon: "tim-icons icon-chart-pie-36",
        component: Home,
    },
    {
        path: "/sobre",
        name: "Sobre",
        icon: "tim-icons icon-chart-pie-36",
        component: Sobre,
    },
    {
        path: "/times",
        name: "Times",
        icon: "tim-icons icon-chart-pie-36",
        component: Times,
    },
    {
        path: "/galerias",
        name: "Galerias",
        icon: "tim-icons icon-chart-pie-36",
        component: Galerias,
    },
    {
        path: "/noticias",
        name: "Noticias",
        icon: "tim-icons icon-chart-pie-36",
        component: Noticias,
    },
    {
        path: "/contatos",
        name: "Contatos",
        icon: "tim-icons icon-chart-pie-36",
        component: Contatos,
    },
];

export default routes;
