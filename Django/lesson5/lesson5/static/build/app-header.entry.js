import { r as registerInstance, h } from './index-010714d3.js';
import './ionic-global-46903197.js';
import './hardware-back-button-24485eb0.js';
import './overlays-60d574b8.js';
import './helpers-abbf5825.js';
import './animation-a27c3e00.js';
import { m as menuController } from './index-76487e7a.js';
import './index-1ee1f7b5.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './utils-bfea02bf.js';
import './index-75b32685.js';
import './ios.transition-c280397c.js';
import './md.transition-c4367c59.js';

const appHeaderCss = "ion-item#dir{margin-left:auto;margin-right:auto;max-width:1270px}";

const AppHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    openFirst() {
        menuController.enable(true, 'first');
        menuController.open('first');
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "dark" }, h("ion-item", { class: "ion-no-margin", lines: "none", id: "dir", color: "dark" }, h("ion-item", { lines: "none", color: "dark", class: " ion-no-margin ion-no-border", slot: "start" }, h("ion-item", { lines: "none", onClick: () => this.openFirst(), slot: "start", class: "ion-no-margin ion-no-border", button: true, color: "dark" }, h("ion-label", null, h("ion-icon", { slot: "start", onClick: () => this.openFirst(), name: "list-outline" }))), h("ion-item", { lines: "none", slot: "start", class: " ion-no-margin ion-no-border", href: "/", color: "dark" }, h("ion-label", null, "Home"))), h("dark-mode", { slot: "end" }))))
        ];
    }
};
AppHeader.style = appHeaderCss;

export { AppHeader as app_header };
