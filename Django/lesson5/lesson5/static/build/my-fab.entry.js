import { r as registerInstance, h } from './index-010714d3.js';

const MyFab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-fab", { vertical: "bottom", horizontal: "end" }, h("ion-fab-button", { color: "dark" }, h("ion-icon", { name: "chevron-up-circle-outline" })), h("ion-fab-list", { side: "top" }, h("ion-fab-button", { href: "https://www.facebook.com/profile.php?id=100053341571471" }, h("ion-icon", { name: "logo-facebook" })), h("ion-fab-button", { href: "https://www.instagram.com/__nychyporchuk__/" }, h("ion-icon", { name: "logo-instagram" }))))
        ];
    }
};

export { MyFab as my_fab };
