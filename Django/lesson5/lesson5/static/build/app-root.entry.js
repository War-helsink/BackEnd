import { r as registerInstance, h } from './index-010714d3.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.jsonRespons = {
            'jsons': {}
        };
    }
    render() {
        return (h("ion-app", null, h("app-header", null), h("ion-content", { id: "main", class: "" }, h("ion-router", { useHash: true }, h("ion-route-redirect", { from: "/", to: "/articles/" }), h("ion-route", { url: "/articles/", component: "app-home" }), h("ion-route", { url: "/articles/:id_articles", component: "app-home" }), h("ion-route", { url: "/topic/:id_tema", component: "app-home" }), h("ion-route", { url: "/game/", component: "app-game" }), h("ion-route", { componentProps: this.jsonRespons, url: "/user/", component: "app-user" }), h("ion-route", { componentProps: this.jsonRespons, url: "/registration/", component: "app-registration" })), h("ion-nav", null)), h("my-fab", null), h("app-menu", { name_menu: "Game" }), ","));
    }
};

export { AppRoot as app_root };
