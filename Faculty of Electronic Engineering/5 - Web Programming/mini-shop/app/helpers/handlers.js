import { ROOT_TAG_NAME, ROUTES } from './constants.js';

export class Router {
    routeChanged = new Event('route-changed');
    constructor(){
        this.setupEvents();
    }

    setupEvents() {
        document.addEventListener('change-route', e => {
            window.history.pushState({}, "", e.detail.targetRoute);
            this.handleLocation();
        })

        window.addEventListener('popstate', (e) => {
            console.log(e);
            this.handleLocation();
        })
    }

    async handleLocation() {
        const path = window.location.pathname;
        const route = ROUTES[path] || ROUTES[404];
        await fetch(route)
        .then((res) => res.text())
        .then(res => {
            const root = document.querySelector(ROOT_TAG_NAME);
            root.innerHTML = res;
            document.dispatchEvent(this.routeChanged);
        })
    }
}