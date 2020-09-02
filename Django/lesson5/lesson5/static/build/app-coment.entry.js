import { r as registerInstance, h } from './index-010714d3.js';

const AppComent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-col", { size: "12" }, h("form", { class: "formComent" }, h("ion-label", null, "Name:"), h("ion-label", null, "Text:"), h("div", null, h("textarea", { class: "coments", name: "text", placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F" })), h("div", null, h("input", { name: "submit", type: "submit", value: "Send message" }))))
        ];
    }
};

export { AppComent as app_coment };
