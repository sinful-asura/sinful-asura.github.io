import { ROOT_TAG_NAME, ROUTES } from './constants.js';

export class Router {
    routeChanged = new Event('route-changed');
    constructor() {
        document.addEventListener('change-route', (e) => {
            this.changeRoute(e.detail.targetRoute);
            console.info(`%c[Route Changed] %c> %c${e.detail.targetRoute}%c`,'color: #0076e3', 'color: white', 'color: red', 'color: white')
        })
    }

    init() {
        for(const route of ROUTES){
           this.mapRouteToLocation(route)
        }
    }

    mapRouteToLocation(route){
        const currentRoute = window.location.pathname;
        if(route.path !== currentRoute) return;
        this.changeRoute(route.path);
    }

    handleRoute(template) {
        const root = document.querySelector(ROOT_TAG_NAME);
        root.innerHTML = template;
        document.dispatchEvent(this.routeChanged);
    }

    async changeRoute(route) {
        const target = ROUTES.find(r => r.path === route);
        if(!target) return;
        await fetch(`/components/${target.component}.component.html`)
        .then(res => res.text())
        .then(res => {
            this.handleRoute(res)
        })
    }
}