import { RouteConfig } from "../modules/core/models.js";

export const ROOT_TAG_NAME = 'app-root';

export const ROUTES = [
    new RouteConfig({
        path: '/',
        component: 'root'
    }),
    new RouteConfig({
        path: '/login',
        component: 'login'
    })
]