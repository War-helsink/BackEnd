import { r as registerInstance, h } from './index-010714d3.js';

const appMenuCss = ".my-custom-menu{--width:300px}";

const AppMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-menu", { side: "start", menuId: "first", contentId: "main" }, h("ion-header", null, h("ion-toolbar", { color: "dark" }, h("ion-title", null, this.name_menu))), h("ion-content", null, h("ion-list", null, h("ion-item", { button: true, href: "/" }, h("ion-icon", { name: "newspaper-outline" }), "News"), h("ion-item", { button: true, href: "game/" }, h("ion-icon", { name: "rocket-outline" }), "Game"), h("ion-item", { button: true, href: "user/" }, h("ion-icon", { name: "person-circle-outline" }), "User")))),
        ];
    }
};
AppMenu.style = appMenuCss;

export { AppMenu as app_menu };
