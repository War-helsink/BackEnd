import { r as registerInstance, h } from './index-010714d3.js';

const appHomeCss = "div.item-native{border-width:0px;border-style:none}div.item-native div.item-inner{border-width:0px;border-style:none}span:hover{cursor:pointer}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-content", null, h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12", "size-lg": "10" }, h("app-articles", { id_tema: this.id_tema, id_articles: this.id_articles })), h("ion-col", { size: "12", "size-lg": "2" }, h("app-sitebar", null)))))
        ];
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
