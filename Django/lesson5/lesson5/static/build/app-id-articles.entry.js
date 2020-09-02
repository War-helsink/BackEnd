import { r as registerInstance, h } from './index-010714d3.js';

const AppIdArticles = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async jsonArticles(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        }
        else {
        }
    }
    connectedCallback() {
        if (!this.articles)
            this.jsonArticles(`articles/${this.id_tema}/`).then((json) => {
                this.articles = json;
            });
    }
    generationArticles() {
        let section = [];
        if (this.articles) {
            for (let i = 0; i < this.articles.length; i++) {
                section.push(h("ion-col", { size: "12", "size-lg": "6" }, h("ion-card", { color: "dark" }, h("ion-card-header", null, h("ion-card-subtitle", null, this.articles[i].Temp_Articles, h("ion-icon", { name: "people-circle-outline" }), this.articles[i].articles_int, h("ion-icon", { name: "heart-outline" }), this.articles[i].articles_like, h("ion-icon", { name: "heart-dislike" }), this.articles[i].articles_unlike), h("ion-card-title", null, this.articles[i].articeles_title)), h("ion-card-content", null, this.articles[i].articles_text))));
            }
        }
        return section;
    }
    render() {
        return [
            h("ion-grid", { fixed: true }, h("ion-row", null, this.generationArticles()))
        ];
    }
};

export { AppIdArticles as app_id_articles };
