import { r as registerInstance, h } from './index-010714d3.js';

const appSitebarCss = "ion-toolbar.sitebar{border-radius:10px}";

const AppSitebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async jsonArticles() {
        let response = await fetch('/sitebar/');
        if (response.ok) {
            let json = await response.json();
            return json;
        }
        else {
        }
    }
    connectedCallback() {
        if (!this.sitebar)
            this.jsonArticles().then((json) => {
                this.sitebar = json;
            });
    }
    generationSitebar() {
        let sitebar = [];
        if (this.sitebar)
            for (let i = 0; i < this.sitebar.length; i++)
                sitebar.push(h("ion-item", { button: true, href: `/topic/${this.sitebar[i].id}`, class: "", lines: "none", color: "dark" }, h("ion-label", null, this.sitebar[i].name_title)));
        return sitebar;
    }
    render() {
        return [
            h("ion-toolbar", { class: "ion-margin-vertical sitebar" }, this.generationSitebar())
        ];
    }
};
AppSitebar.style = appSitebarCss;

export { AppSitebar as app_sitebar };
